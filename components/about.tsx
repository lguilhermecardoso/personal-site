"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mim</SectionHeading>
      <p className="mb-3">
      Depois de me formar em Sistemas de informações, decidi seguir minha paixão pela programação. Me matriculei em um bootcamp de programação e aprendi desenvolvimento web full-stack. Minha parte favorita da programação é o aspecto de resolução de problemas. Adoro a sensação de finalmente encontrar uma solução para um problema. Minha pilha principal é React, Next.js, Node.js e MongoDB. Também estou familiarizado com TypeScript e Prisma. Estou sempre em busca de aprender novas tecnologias. Atualmente, estou procurando uma posição em tempo integral como desenvolvedor de software.
      Quando não estou programando, gosto de jogar videogames, assistir a filmes e brincar com meu cachorro. Também gosto de aprender coisas novas. Atualmente, estou estudando história e filosofia. Também estou aprendendo a tocar guitarra.
        
      </p>

    </motion.section>
  );
}
