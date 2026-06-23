import type { Metadata } from "next";
import { EngineHub } from "@/components/hub/EngineHub";
import { hubs } from "@/lib/hubs";

export const metadata: Metadata = {
  title: hubs.grow.metaTitle,
  description: hubs.grow.metaDescription,
};

export default function GrowHubPage() {
  return <EngineHub hub={hubs.grow} />;
}
