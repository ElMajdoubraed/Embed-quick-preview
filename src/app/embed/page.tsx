"use client";

import React, { useState, useEffect } from "react";
import { Template1, Template2, Template3 } from "@/templates";
import { TLoading } from "@/components/Loadings";
import SuspenseEmbeddedContent from "@/helpers/SuspenseEmbeddedContent";

export default function Embed() {
  const [usedTemplate, setUsedTemplate] = useState<string | null>(null);

  useEffect(() => {
    const usedTemplate = localStorage.getItem("template") || "2";
    setUsedTemplate(usedTemplate);
  }, []);

  switch (usedTemplate) {
    case "1":
      return (
        <Template1>
          <SuspenseEmbeddedContent />
        </Template1>
      );
    case "2":
      return (
        <Template2>
          <SuspenseEmbeddedContent />
        </Template2>
      );
    case "3":
      return (
        <Template3>
          <SuspenseEmbeddedContent />
        </Template3>
      );
    default:
      return <TLoading />;
  }
}
