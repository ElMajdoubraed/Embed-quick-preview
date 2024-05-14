"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FooterT1, HeaderT1, MainT1 } from "@/components/Templates/Template-1";

function EmbeddedContent() {
  const [render, setRender] = useState(false);
  const [code, setCode] = useState("");
  const [scriptAppended, setScriptAppended] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const embedCode = searchParams.get("code");

    if (typeof window !== "undefined" && !scriptAppended && embedCode) {
      // Check if script has not been appended yet
      const script = document.createElement("script");
      script.src = "https://test1.leadshook.test/s/js_embed";
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

export default function Embed() {
  return (
    <>
      <HeaderT1 />
      <MainT1>
        <EmbeddedContent />
      </MainT1>
      <FooterT1 />
    </>
  );
}
