import type { Metadata } from "next";
import { ABOUT } from "@/content";
import { FinalCta } from "@/components/layout/FinalCta";
import { Story } from "@/components/sections/about/Story";
import { PhotoBand, VisionMission } from "@/components/sections/about/VisionMission";
import { Team } from "@/components/sections/about/Team";

export const metadata: Metadata = { title: ABOUT.meta.title, description: ABOUT.meta.description };

export default function AboutPage() {
  return (
    <>
      <Story />
      <PhotoBand />
      <VisionMission />
      <Team />
      <FinalCta />
    </>
  );
}
