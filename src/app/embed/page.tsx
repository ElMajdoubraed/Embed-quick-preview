"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Template1, Template2 } from "@/templates";
import { TLoading } from "@/components/Loadings";

function EmbeddedContent() {
  const [render, setRender] = useState(false);
  const [code, setCode] = useState("");
  const [scriptAppended, setScriptAppended] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const embedCode: string = searchParams.get("code") || "";
    const domain: string = searchParams.get("domain") || "";

    if (typeof window !== "undefined" && !scriptAppended && embedCode) {
      // Check if script has not been appended yet
      const script = document.createElement("script");
      script.src = domain + "/s/js_embed";
      script.async = true;
      script.onload = () => {
        setRender(true);
      };
      document.body.appendChild(script);
      setScriptAppended(true); // Set scriptAppended to true after appending the script
    }

    setCode(embedCode || "");
  }, [searchParams, scriptAppended]);

  useEffect(() => {
    if (code && scriptAppended) {
      // If both HTML content and script are ready, setRender to true
      setRender(true);
    }
  }, [code, scriptAppended]);

  return (
    <div>
      {render && (
        <div
          dangerouslySetInnerHTML={{
            __html: `${code}`,
          }}
        />
      )}
    </div>
  );
}

function SuspenseEmbeddedContent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EmbeddedContent />
    </Suspense>
  );
}

export default function Embed() {
  const [usedTemplate, setUsedTemplate] = useState<string>();
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
    default:
      return <TLoading />;
  }
}
