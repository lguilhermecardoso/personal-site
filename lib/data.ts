import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import s2medica from "@/public/s2medica.png";
import maksiwa from "@/public/maksiwa.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bacharelo em Sistemas de Informação",
    location: "Itararé/SP Brasil",
    description:
      "Graduado em bacharel em Sistemas de Informação pela Faculdades Integradas de Itararé Fafit/Facic. Duração 4 anos inicio em 2010 e termino em 2013.",
    icon: React.createElement(LuGraduationCap),
    date: "2013",
  },
  {
    title: "Pós Graduação MBA em Product Management",
    location: "Rio de Janeiro/RJ Brasil",
    description:
      "Pos graduado em MBA com foco em Product Management pela Universidade Descomplica.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Sênior Front-End Developer",
    location: "Curitiba/PR Brasil",
    description:
      "Trabalho como desenvolvedor front-end sênior na empresa Arcotech",
    icon: React.createElement(CgWorkAlt),
    date: "2023 . Atual",
  },
  {
    title: "Sênior Front-End Developer",
    location: "Curitiba/PR Brasil",
    description:
      "Trabalho como desenvolvedor front-end sênior na empresa Gympass",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Tech Lead Front-End",
    location: "São Paulo/SP Brasil",
    description:
      "Trabalhei como Tech Lead Front-End na empresa Kobe.io",
    icon: React.createElement(FaReact),
    date: "2020 - 2022",
  },
  {
    title: "Full Stack Developer",
    location: "Curitiba/PR Brasil",
    description:
      "Trabalhei como Full Stack Developer na empresa Pontomais",
    icon: React.createElement(FaReact),
    date: "2017 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "S2 Medica",
    description:
      "Projeto entregue com sucesso para a empresa S2 Medica, com foco em atender as necessidades do cliente.",
    tags: ["React", "Next.js", "Tailwind", "Hooks", "Laravel", "PHP", "MySQL"],
    imageUrl: s2medica,
  },
  {
    title: "Maksiwa.com",
    description:
      "Projeto de migração do site em PHP de servidores compartilhados para AWS. O projeto foi desenvolvido em PHP e Mysql.",
    tags: ["PHP", "MySql", "AWS", "Cloud"],
    imageUrl: maksiwa,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Angular",
  "PHP",
  "Laravel"
] as const;
