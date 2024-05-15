"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

function EmbeddedContent() {
  const [render, setRender] = useState(false);
  const [code, setCode] = useState("");
  const [scriptAppended, setScriptAppended] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const embedCode = searchParams.get("code") || "";
    const domain = searchParams.get("domain") || "";

    const appendScripts = () => {
      const script = document.createElement("script");
      script.src = `${domain}/s/js_embed`;
      script.async = true;

      const popupScript = document.createElement("script");
      popupScript.innerHTML = `
        function showDTPopup(e) { 
          document.body.classList.toggle("show-dt-popup"); 
          document.querySelector(e).classList.toggle("dt-visible");
        }
        
        function hideDTPopup(e) {
          document.body.classList.toggle("show-dt-popup"); 
          document.querySelector(e).classList.toggle("dt-visible");
        }
      `;
      popupScript.async = true;

      script.onload = () => {
        setRender(true);
      };

      document.body.appendChild(script);
      document.body.appendChild(popupScript);
      setScriptAppended(true);
    };

    if (typeof window !== "undefined" && !scriptAppended && embedCode) {
      appendScripts();
    }

    setCode(embedCode || "");
  }, [searchParams, scriptAppended]);

  useEffect(() => {
    if (code && scriptAppended) {
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

export default EmbeddedContent;
