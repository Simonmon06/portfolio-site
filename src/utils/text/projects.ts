import { SKILLS } from "@/utils/skillIcons";
import { ILanguageTexts } from "../types";

export const projects: ILanguageTexts["projects"] = {
  title: "Featured Projects",
  viewProjects: "View All Projects",
  viewLivePreview: "View Live Preview",
  description: "Description",
  technologies: "Technologies",
  functionalities: "Functionalities",
  projectList: [
    {
      id: "chat-app",
      name: "Real Time Chat App",
      description:
        "Built a full-stack chat platform (React/TypeScript, Tailwind CSS, shadcn/ui, Node/Express, Prisma/PostgreSQL) with authentication, and conversation management. End-to-end design & implementation: UI/UX, data model, and APIs.",
      images: [
        "/images/chat-app/chat-app-1.png",
        "/images/chat-app/chat-app-2.png",
        "/images/chat-app/chat-app-3.png",
      ],
      functionality: [
        "Implemented real-time messaging and online presence with Socket.IO, broadcasting new messages and conversation ",
        "Designed state management with Zustand + typed selectors, ensuring minimal re-renders and consistent single source of truth for conversations/messages.",
        "Structured as a PNPM monorepo, sharing a single source of truth for data validation between client and server so the API contract matches the UI, and deploying with automated production releases via GitHub CI/CD on Render.",
      ],
      technologies: [
        "react",
        "zustand",
        "typescipt",
        "javascipt",
        "tailwind",
        "shadcn",
        "nodeJs",
        "express",
        "postgresql",
        "prisma",
      ],
      livePreview: "https://chat-app-client-y25q.onrender.com",
      github: "https://github.com/Simonmon06/chat-app",
      primaryColor: "#AC3459",
      secoundaryColor: "#F7F7F7",
    },
    {
      id: "imagenRoom",
      name: "ImagenRoom · AI Interior Designer",
      description:
        "An e-commerce platform for trendy apparel with seamless checkout and real-time inventory.",
      images: [
        "/images/imagenRoom/imagenRoom-1.png",
        "/images/imagenRoom/imagenRoom-2.png",
        "/images/imagenRoom/imagenRoom-3.png",
      ],
      functionality: [
        "Built the React/Vite front end from scratch:image upload, controlled forms, previews; built a product card list and a furniture size table; Tailwind/DaisyUI, error handling",
        "Delivered all the Flask REST endpoints from spec/tests: generate scene, estimate sizes, furniture lookup, include  image→Vision→LLM→search (Cloud Vision, Gemini, SerpAPI/Lens, Imgur)",
      ],
      technologies: ["react", "javascipt", "python", "flask"],
      // livePreview: "https://crown-clothing.example.com",
      // github: "#",
      primaryColor: "#000000",
      secoundaryColor: "#FFFFFF",
    },
    {
      id: "Serverful and Serverless",
      name: "CMPT 756 · Microservices: Serverful vs Serverless (Course Project)",
      description:
        "Implemented a microservices-based Post-Comment system with decoupled Post, Comment, Query, and EventBus services, deployed on both a serverful stack (AWS EKS, Nginx Ingress, Docker, MongoDB) and a serverless stack (AWS Lambda, API Gateway, MongoDB Atlas) to compare architectures. Performance tests using JMeter and custom scripts show that while the serverful deployment achieves lower latency under light sequential load, the serverless deployment delivers significantly better average response time under concurrent traffic, highlighting the trade-offs between fixed and on-demand resource provisioning.",
      images: [],
      functionality: [
        "Architected a microservice-based application, building all services from the ground up using Node.js.",
        "Containerized the services with Docker and deployed them to AWS EKS using Kubernetes, managing ingress with Nginx.",
        "Implemented a custom Event Bus for decoupled communication and automated the CI/CD pipeline with GitHub Actions.",
        "Check the report in my Github Repo README",
      ],
      technologies: [
        "react",
        "nodeJs",
        "javascipt",
        "css",
        "express",
        "docker",
        "kubernetes",
        "githubActions",
        "nginx",
        "aws",
      ],
      // livePreview: "https://chat-app-client-y25q.onrender.com",
      github: "https://github.com/Simonmon06/CMPT-756-Project-Serverful",
      primaryColor: "#AC3459",
      secoundaryColor: "#F7F7F7",
    },
  ],
};
