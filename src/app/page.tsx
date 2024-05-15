"use client";

import React from "react";
import { AddTemplateButton } from "@/components/Buttons";
import { CTemplate } from "@/components/Cards";
import { Navbar } from "@/components/Navigations";
import Templates from "./templates";
import { map } from "lodash";
import "animate.css";

export default function Home() {
  return (
    <div className="animate__animated animate__pulse">
      <Navbar />
      <div className="container mx-auto mt-24 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {map(Templates, (template, index) => (
            <CTemplate key={index} {...template} />
          ))}
        </div>
        <div className="flex justify-center mt-24">
          <AddTemplateButton />
        </div>
      </div>
    </div>
  );
}
