import { SKILLS } from "@/utils/skillIcons";
import { ILanguageTexts } from "../types";

export const workHistory: ILanguageTexts["workHistory"] = {
  title: "Work History",
  viewWorkHistory: "View Full Work History",
  workHistoryList: [
    {
      companyName: "Nokia",
      companyLogo: "🖌️",
      jobTitle: "Web Developer IP SDN Co−op",
      startDate: "May 2023",
      endDate: "Aug 2023",
      companyDescription:
        "A wonderful startup charity focused on helping pregnant women throughout their pregnancy by supporting them with care packages tailored to each trimester.",
      responsibilities: [
        "Delivered production UI features for Nokia’s carrier Network Services platform, implemented master–detail (nested) tables via Nokia’s internal AG-Grid wrapper; shipped related UI updates for Flex Algo configureation workflows (React/Redux). Worked in a focused 3-person squad (2 software engineers + me)",
        "Navigated in a large codebase consuming 10+ internal npm packages (e.g., nokia-react-table, nokia-react-core-*) from a private registry; integrated shared components and handled versioning/peerDeps across teams",
        "Diagnosed and fixed a loading data race where the grid could render empty after the loading overlay; aligned Redux async flow with the grid lifecycle to resolve it.",
        "Integrated the internal Schema Form (Formik-based) package to render JSON-Schema driven forms in the app.",
        "Worked in an Agile cadence, pulled tasks from the backlog, maintained accurate ticket status/notes/screen reordings, gave concise daily standup updates, and set up meetings with QA/BE/UX to resolve blockers.",
      ],
      technologies: [
        SKILLS.javascipt,
        SKILLS.html,
        SKILLS.css,
        SKILLS.react,
        SKILLS.redux,
        SKILLS.github,
        SKILLS.jira,
      ],
    },
  ],
};
