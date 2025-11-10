import { ILanguageTexts } from "../types";
import type { SkillKey } from "@/utils/skillIcons";

const frontEndIcons: SkillKey[] = [
  "react",
  "css",
  "tailwind",
  "shadcn",
  "html",
  "javascipt",
  "typescipt",
  "redux",
  "jest",

  // "cypress",
];

const backEndIcons: SkillKey[] = [
  "nodeJs",
  "express",
  "flask",
  "postgresql",
  "mongodb",
  "prisma",
  "docker",
];

const integrationIcons: SkillKey[] = [
  "jira",
  "gitlab",
  "oauth",
  "awsLambda",
  "stripe",
  "aws",
  "kubernetes",
  "docker",
  "nginx",
];

const aiIcons: SkillKey[] = [
  "tensorflow",
  "pytorch",
  "openai",
  "huggingface",
  "scikitlearn",
  "keras",
  "nltk",
  "jupyter",
];

export const skills: ILanguageTexts["skills"] = {
  title: "Skills & Integrations",
  viewSkills: "View All Skills",
  skillCategories: [
    {
      name: "Front End",
      id: "frontEnd",
      description:
        "My approach to building user interfaces combines modern frameworks with a deep appreciation for design fundamentals. I craft applications that are not only clean, responsive, and accessible, but also visually cohesive, drawing on my experience in UI design and my knowledge of typography, color, and layout. I am adept at translating complex requirements into elegant, high-performance solutions. <br /><br />A strong communicator, I work closely with backend, UI, and QA teams to bridge the gap between technical implementation and design vision, ensuring we successfully deliver on our objectives.",
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
