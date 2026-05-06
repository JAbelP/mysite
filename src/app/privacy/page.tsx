export const metadata = {
  title: "Privacy Policy — BrightByte",
  description: "BrightByte's privacy policy for social media automation services.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-base leading-relaxed">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: November 5, 2026</p>

      <p className="mb-6">
        BrightByte (&ldquo;we&rdquo;, &ldquo;us&rdquo;) operates social media automation services for
        small business clients. This policy describes what information we
        collect, how we use it, and your rights regarding it.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">What we collect</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          OAuth access and refresh tokens for connected social media accounts
          (e.g. Pinterest), used solely to publish content on the connected
          account&apos;s behalf.
        </li>
        <li>
          Account metadata necessary for publishing: board IDs, account IDs,
          and display names.
        </li>
        <li>
          Post content you or your automated workflows submit to our system,
          including text, images, and destination URLs.
        </li>
        <li>
          Operational logs including timestamps and publish status (success or
          failure).
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">How we store it</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          All data is stored on infrastructure operated solely by BrightByte.
        </li>
        <li>
          We do not use third-party analytics, advertising networks, or data
          brokers.
        </li>
        <li>OAuth tokens are stored encrypted at rest.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">How we use it</h2>
      <p className="mb-6">
        We use collected data solely to schedule and publish content to your
        connected accounts on your instruction. We do not analyze your content
        for any purpose other than delivering the service you have requested.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">How we share it</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          We do not sell, rent, or share your data with any third party.
        </li>
        <li>
          Data is transmitted only to the social media platform you have
          connected (e.g. Pinterest) for the purpose of publishing your
          content.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">How to revoke access</h2>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li>
          Disconnect the integration in our app, or revoke access directly in
          your social media account settings (e.g. on Pinterest, under &ldquo;Apps
          and websites&rdquo;).
        </li>
        <li>
          Email us at{" "}
          <a
            href="mailto:socials@brightbyte.dev"
            className="underline"
          >
            socials@brightbyte.dev
          </a>{" "}
          to request full data deletion.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">Contact</h2>
      <p>
        Questions about this policy? Reach us at{" "}
        <a href="mailto:socials@brightbyte.dev" className="underline">
          socials@brightbyte.dev
        </a>
        .
      </p>
    </main>
  );
}
