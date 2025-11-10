import { GoogleGenerativeAI } from "@google/generative-ai";
import { englishTexts } from "@/utils/text";

const apiKey = process.env.GEMINI_API_KEY;
const profileDataForAi = structuredClone(englishTexts);
if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not set");
}

const genAI = new GoogleGenerativeAI(apiKey);

type Message = { role: "system" | "user" | "assistant"; content: string };

export async function POST(req: Request) {
  const { messages }: { messages: Message[] } = await req.json();

  const systemPrompt = `
You are an AI assistant trained to answer questions about ${
    englishTexts.aboutMe.name
  } and their portfolio.
Use the following data to answer questions regarding this user:

${JSON.stringify(profileDataForAi)}

If the user asks something that you cannot answer, say: "I'm not sure about that. You can contact ${
    englishTexts.aboutMe.name
  } directly by clicking the email icon in the About Me section"
  `;

  const model = genAI.getGenerativeModel({
    model: process.env.GEMINI_MODEL ?? "gemini-2.0-flash",
    systemInstruction: systemPrompt,
  });

  const contents = messages
    .filter((message) => message.role !== "system")
    .map((message) => ({
      role: message.role === "assistant" ? "model" : "user",
      parts: [{ text: message.content }],
    }));

  const result = await model.generateContent({ contents });
  const responseText = result.response.text();

  return Response.json({ reply: { role: "assistant", content: responseText } });
}

// import { englishTexts } from "@/utils/text";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// const apiKey = process.env.GEMINI_API_KEY;

// export async function POST(req: Request) {
//   const profileDataForAi = structuredClone(englishTexts);
//   const { messages } = await req.json();

//   const systemPrompt = `
// You are an AI assistant trained to answer questions about ${
//     englishTexts.aboutMe.name
//   } and their portfolio.
// Use the following data to answer questions regarding this user:

// ${JSON.stringify(englishTexts)}

// If the user asks something that you cannot answer, say: "I'm not sure about that. You can contact ${
//     englishTexts.aboutMe.name
//   } directly by clicking the email icon in the About Me section"
//   `;

//   const chat = await openai.chat.completions.create({
//     model: "gpt-5-nano",
//     messages: [{ role: "system", content: systemPrompt }, ...messages],
//   });

//   return Response.json({ reply: chat.choices[0].message });
// }

// ${JSON.stringify(englishTexts)}
