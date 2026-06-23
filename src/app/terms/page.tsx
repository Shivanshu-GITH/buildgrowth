import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern your use of the ${site.name} website and services.`,
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="June 2026">
      <p>
        These terms govern your use of the {site.name} website. By accessing or using this site, you
        agree to them. If you don&apos;t agree, please don&apos;t use the site.
      </p>

      <h2>Use of the site</h2>
      <p>
        You may use this website for lawful purposes only. You agree not to misuse it, attempt to
        disrupt it, or use it in any way that could harm {site.name} or others.
      </p>

      <h2>Services &amp; quotes</h2>
      <p>
        Information on this site is for general guidance. Specific deliverables, timelines and pricing
        are confirmed in a written proposal or agreement before any project begins.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on this site — text, design, graphics and logos — belongs to {site.name} unless
        stated otherwise, and may not be reused without permission.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        The website is provided &quot;as is&quot;. To the extent permitted by law, {site.name} is not
        liable for any indirect or consequential loss arising from use of this site.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email us at <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalLayout>
  );
}
