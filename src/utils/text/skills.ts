import { ILanguageTexts } from "../types";
import type { SkillKey } from "@/utils/skillIcons";

const frontEndIcons: SkillKey[] = [
  "react",
  "css",
  "tailwind",
  "shadcn",
  "html",
  "sass",
  "javascipt",
  "typescipt",
  "redux",
  "jest",
  // "cypress",
];

const backEndIcons: SkillKey[] = [
  "nodeJs",
  "express",
  "django",
  "flask",
  // "dotnet",
  // "springBoot",
  // "graphql",
  "postgresql",
  "mongodb",
  // "redis",
  "docker",
  // "elasticsearch",
  // "rabbitmqBackend",
];

const integrationIcons: SkillKey[] = [
  "jira",
  "gitlab",
  // "zapier",
  // "webhooks",
  "oauth",
  "awsLambda",
  // "googleCloudFunctions",
  "stripe",
  // "twilio",
  // "firebase",
  // "rabbitmq",
  // "kafka",
  // "slack",
  // "zendesk",
  // "mailgun",
  // "sendgrid",
];

const aiIcons: SkillKey[] = [
  "tensorflow",
  "pytorch",
  "openai",
  "huggingface",
  "scikitlearn",
  "keras",
  // "spacy",
  "nltk",
  // "opencv",
  "jupyter",
  // "fastapi",
  // "azureml",
  // "awsSagemaker",
  // "googleAI",
  // "generalAI",
];

export const skills: ILanguageTexts["skills"] = {
  title: "Skills & Integrations",
  viewSkills: "View All Skills",
  skillCategories: [
    {
      name: "Front End",
      id: "frontEnd",
      description:
        "Crafting clean responsive and intuitive user interfaces that deliver seamless, engaging user experiences. I specialize in translating complex requirements into visually appealing layouts, ensuring accessibility and performance across all devices.<br /><br /> My approach combines modern frameworks, best practices, and a keen eye for design to create applications that users love to interact with.",
      icons: frontEndIcons,
    },
    {
      name: "Back End",
      id: "backEnd",
      description:
        "Building agile robust server-side applications and APIs to power efficient, scalable solutions. My expertise includes designing secure data architectures, optimizing performance, and implementing business logic that drives real-world results.<br /><br /> I leverage the latest technologies and methodologies to ensure reliability, maintainability, and seamless integration with front-end systems.",
      icons: backEndIcons,
    },
    {
      name: "Integrations",
      id: "integrations",
      description:
        "Connecting systems and services through reliable, secure, and efficient integration solutions. I excel at orchestrating data flows between diverse platforms, automating workflows, and ensuring smooth communication across APIs and third-party services.<br /><br /> My focus is on delivering integrations that enhance productivity, reduce manual effort, and scale with evolving business needs.",
      icons: integrationIcons,
    },
    {
      name: "AI",
      id: "ai",
      description:
        "Leveraging artificial intelligence and machine learning to build intelligent, data-driven solutions. My experience includes developing and integrating AI models, automating decision-making processes, and enhancing applications with natural language processing, computer vision, and predictive analytics.<br /><br /> I focus on practical AI implementations that deliver measurable value, improve user experiences, and drive innovation.",
      icons: aiIcons,
    },
  ],
};
