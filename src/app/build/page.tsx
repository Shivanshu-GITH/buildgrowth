import type { Metadata } from "next";
import { EngineHub } from "@/components/hub/EngineHub";
import { hubs } from "@/lib/hubs";

export const metadata: Metadata = {
  title: hubs.build.metaTitle,
  description: hubs.build.metaDescription,
};

export default function BuildHubPage() {
  return <EngineHub hub={hubs.build} />;
}
