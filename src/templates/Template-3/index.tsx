"use client";
import { FooterT3, HeaderT3, MainT3 } from "@/components/Templates/Template-3";
import React from "react";
import "./styles.css";

const Template: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <HeaderT3 />
      <MainT3>{children}</MainT3>
      <FooterT3 />
    </div>
  );
};

export default Template;
