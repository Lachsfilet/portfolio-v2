"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { sampleArcs, globeConfig } from "./globe.config";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});

export function Globe() {
  return (
      <div className="mx-auto w-full relative h-full md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
        </motion.div>
          <World data={sampleArcs} globeConfig={globeConfig}/>;
    </div>
  );
}