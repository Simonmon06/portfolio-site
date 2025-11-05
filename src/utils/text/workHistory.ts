import { SKILLS } from "@/utils/skillIcons";
import { ILanguageTexts } from "../types";

export const workHistory: ILanguageTexts["workHistory"] = {
  title: "Work History",
  viewWorkHistory: "View Full Work History",
  workHistoryList: [
    {
      companyName: "Amazon, Inc",
      companyLogo: "🖌️",
      jobTitle: "Senior Frontend Engineer",
      startDate: "Jan 2019",
      endDate: "Present",
      companyDescription:
        "A wonderful startup charity focused on helping pregnant women throughout their pregnancy by supporting them with care packages tailored to each trimester.",
      responsibilities: [
        "A Complete authentication system; Login, Sign up, password reset / updater , route guarding, security, user roles, etc.",
        "Admin dashboard; To manage registrations, blog posts, subscribers newsletters, etc.",
        "Events calendar system; Users can register for various charity events, each event has a chat forum similar to reddit, etc.",
        "Real time chat; Users can join various groups and chat in real time.",
        "A full stack cross platform (iOs & Android) mobile app that satisfied the business requirements. Some of which includes; Users can track their diet , sleep, etc . View company news & blogs, Ask question and get replies in forums , etc",
        "Real time chat; Users can join various groups and chat in real time.",
      ],
      technologies: [
        SKILLS.html,
        SKILLS.sass,
        SKILLS.typescipt,
        SKILLS.react,
        SKILLS.redux,
        SKILLS.github,
        SKILLS.jest,
        SKILLS.styledComponnets,
      ],
    },
    {
      companyName: "PixelForge Studios",
      companyLogo: "🖌️",
      jobTitle: "Lead UI/UX Developer",
      startDate: "Feb 2017",
      endDate: "Dec 2018",
      companyDescription:
        "A creative agency specializing in interactive web experiences and digital branding for startups and tech companies.",
      responsibilities: [
        "Designed and implemented interactive landing pages for high-profile clients.",
        "Led a team of 5 developers in building a reusable component library.",
        "Collaborated with designers to translate Figma prototypes into pixel-perfect React components.",
        "Optimized web applications for accessibility and performance.",
        "Introduced automated testing and CI/CD pipelines to the frontend workflow.",
      ],
      technologies: [
        SKILLS.html,
        SKILLS.sass,
        SKILLS.typescipt,
        SKILLS.react,
        SKILLS.redux,
        SKILLS.github,
        SKILLS.jest,
        SKILLS.styledComponnets,
      ],
    },
    {
      companyName: "HealthSync Solutions",
      companyLogo: "💡",
      jobTitle: "Full Stack Developer",
      startDate: "Jun 2015",
      endDate: "Jan 2017",
      companyDescription:
        "Developed digital health platforms connecting patients and providers, focusing on secure data exchange and real-time communication.",
      responsibilities: [
        "Built secure patient portals with real-time messaging and appointment scheduling.",
        "Integrated third-party APIs for health data synchronization.",
        "Implemented role-based access control and data encryption.",
        "Worked closely with backend engineers to optimize RESTful APIs.",
        "Maintained comprehensive unit and integration test coverage.",
      ],
      technologies: [
        SKILLS.html,
        SKILLS.sass,
        SKILLS.typescipt,
        SKILLS.react,
        SKILLS.redux,
        SKILLS.github,
        SKILLS.jest,
        SKILLS.styledComponnets,
      ],
    },
    {
      companyName: "EcoTrack Analytics",
      companyLogo: "🌱",
      jobTitle: "Frontend Engineer",
      startDate: "Aug 2013",
      endDate: "May 2015",
      companyDescription:
        "Analytics SaaS startup providing environmental data dashboards and reporting tools for enterprise clients.",
      responsibilities: [
        "Developed interactive dashboards for visualizing environmental metrics.",
        "Implemented data filtering and export features for enterprise users.",
        "Collaborated with data scientists to display real-time analytics.",
        "Refactored legacy codebase to modern React and TypeScript.",
        "Presented technical workshops on frontend best practices.",
      ],
      technologies: [
        SKILLS.html,
        SKILLS.sass,
        SKILLS.typescipt,
        SKILLS.react,
        SKILLS.redux,
        SKILLS.github,
        SKILLS.jest,
        SKILLS.styledComponnets,
      ],
    },
  ],
};
