import { aboutMe } from "./about";
import { projects } from "./projects";
import { education } from "./education";
import { workHistory } from "./workHistory";
import { skills } from "./skills";
import { ai } from "./ai";
import { notFound } from "./notFound";
import { ILanguageTexts } from "../types";

export const englishTexts: ILanguageTexts = {
  aboutMe,
  projects,
  education,
  workHistory,
  skills,
  ai,
  notFound,
};

export type { ILanguageTexts } from "../types";
