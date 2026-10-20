import type { Metadata } from "next";
import { HOME } from "@/content";
import { Intro } from "@/components/motion/Intro";
import { Hero } from "@/components/sections/home/Hero";
import { ProductCards } from "@/components/sections/home/ProductCards";
import { EngineeringSplit } from "@/components/sections/home/EngineeringSplit";
import { WorkCards } from "@/components/sections/home/WorkCards";
import { FinalCta } from "@/components/layout/FinalCta";

export const metadata: Metadata = {
  title: HOME.meta.title,
  description: HOME.meta.description,
  openGraph: { title: HOME.meta.title, description: HOME.meta.description, images: ["/og.png"] },
};

export default function Home() {
  return (
    <>
      <Intro />
      <Hero />
      <ProductCards />
      <EngineeringSplit />
      <WorkCards />
      <FinalCta />
    </>
  );
}
