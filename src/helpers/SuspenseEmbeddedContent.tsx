"use client";
import React, { Suspense } from "react";
import EmbeddedContent from "@/helpers/EmbeddedContent";
import { TLoading } from "@/components/Loadings";

function SuspenseEmbeddedContent() {
  return (
    <Suspense fallback={<TLoading />}>
      <EmbeddedContent />
    </Suspense>
  );
}

export default SuspenseEmbeddedContent;
