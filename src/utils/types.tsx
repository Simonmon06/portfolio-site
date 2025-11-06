import { JSX } from "react";

export interface ILanguageTexts {
  aboutMe: {
    name: string;
    title: string;
    description: string;
    downloadResume: string;
  };
  education: {
    title: string;
    viewCertification: string;
    accomplishment: string;
    viewFullEducationHistory: string;
    educationHistory: {
      date: string;
      program: string;
      school: string;
      description?: string;
      workload?: string[];
    }[];
  };
  workHistory: {
    title: string;
    viewWorkHistory: string;
    workHistoryList: {
      companyName: string;
      companyLogo: JSX.Element | string;
      jobTitle: string;
      startDate: string;
      endDate: string;
      companyDescription: string;
      responsibilities: string[];
      technologies: {
        name: string;
        icon: {
          normal: JSX.Element;
          large: JSX.Element;
        };
        type: string;
      }[];
    }[];
  };
  skills: {
    title: string;
    viewSkills: string;
    skillCategories: {
      name: string;
      id: string;
      description: string;
    }[];
  };
  projects: {
    title: string;
    viewProjects: string;
    viewLivePreview: string;
    description: string;
    functionalities: string;
    technologies: string;
    projectList: {
      id: string;
      name: string;
      description: string;
      images: string[];
      functionality: string[];
      technologies: {
        name: string;
        icon: {
          normal: JSX.Element;
          large: JSX.Element;
        };
        type: string;
      }[];
      livePreview?: string;
      github?: string;
      primaryColor?: string;
      secoundaryColor?: string;
    }[];
  };
  ai: {
    chatWithAi: string;
    textPlaceholder: string;
  };
  notFound: {
    pageNotFound: string;
    returnHome: string;
  };
}
