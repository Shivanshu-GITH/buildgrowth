import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your information.`,
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="June 2026">
      <p>
        This Privacy Policy explains how {site.name} (&quot;we&quot;, &quot;us&quot;) collects, uses
        and protects information you share with us through this website. By using the site, you agree
        to this policy.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>Details you submit through our contact form — such as your name, business, email, phone and message.</li>
        <li>Basic analytics data (pages visited, device and browser) to help us improve the site.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to your enquiry and provide the services you ask about.</li>
        <li>To improve our website and understand how visitors use it.</li>
        <li>We never sell your personal information to third parties.</li>
      </ul>

      <h2>Data retention &amp; security</h2>
      <p>
        We keep your information only as long as needed to serve you, and we take reasonable measures
        to protect it. No method of transmission over the internet is fully secure, but we work to keep
        your data safe.
      </p>

      <h2>Your choices</h2>
      <p>
        You can request access to, correction of, or deletion of your personal data at any time by
        emailing us at <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Reach us at <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalLayout>
  );
}
