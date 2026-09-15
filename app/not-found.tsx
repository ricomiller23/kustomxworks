import Link from "next/link";
import { CTABand } from "@/components/CTABand";

export default function NotFound() {
  return (
    <>
      <section
        className="py-24 px-6 text-center"
        style={{ background: "linear-gradient(135deg, #1A1008 0%, #2A211A 100%)" }}
      >
        <div className="container-site">
          <h1 className="font-heading font-black text-6xl text-white mb-4">404</h1>
          <p className="text-xl text-orange-100/70 mb-8">
            We couldn&rsquo;t find that page — but we can definitely fix whatever needs fixing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-rust">
              Back to Home
            </Link>
            <Link href="/book" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.4)", color: "white" }}>
              Book a Service
            </Link>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
