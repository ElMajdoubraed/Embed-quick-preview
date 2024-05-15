"use client";
import React from "react";
import "./styles.css";
import {
  FeatureT2,
  HeroT2,
  LayoutT2,
  PricingT2,
} from "@/components/Templates/Template-2";

const Template: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <LayoutT2>
        <HeroT2>{children}</HeroT2>
        <FeatureT2 />
        <PricingT2 />
      </LayoutT2>
    </>
  );
};

export default Template;
