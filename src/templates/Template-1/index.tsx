"use client";
import { FooterT1, HeaderT1, MainT1 } from "@/components/Templates/Template-1";
import React from "react";
import "./styles.css";

const Template: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="t1-body">
      <HeaderT1 />
      <MainT1>{children}</MainT1>
      <FooterT1 />
    </div>
  );
};

export default Template;
