"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { LockIcon, MailIcon, ShieldCheckIcon, ArrowRightIcon } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/leads";

  const [email, setEmail] = useState("kustomxworks@proton.me");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Invalid email or password");
      }

      router.push(from);
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Failed to log in.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-5">
      {error && (
        <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700 flex items-center gap-2">
          <span>⚠️</span>
          <span>{error}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5">
          Admin Email
        </label>
        <div className="relative">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input pl-10 text-sm"
            placeholder="kustomxworks@proton.me"
          />
          <MailIcon
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-tan"
            aria-hidden="true"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5">
          Admin Password
        </label>
        <div className="relative">
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input pl-10 text-sm"
            placeholder="••••••••"
            autoComplete="current-password"
          />
          <LockIcon
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-tan"
            aria-hidden="true"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-rust w-full justify-center py-3 text-sm font-bold shadow-md hover:shadow-lg transition-all disabled:opacity-60"
        style={{ backgroundColor: "#C1502E" }}
      >
        {loading ? "Authenticating…" : "Access Leads Dashboard"}
        {!loading && <ArrowRightIcon size={16} className="ml-1" />}
      </button>
    </form>
  );
}

export default function LeadsLoginPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ background: "linear-gradient(135deg, #150E07 0%, #241A13 50%, #1D140D 100%)" }}
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-tan/20">
        <div className="text-center mb-8">
          <div
            className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-4 text-white shadow-lg"
            style={{ backgroundColor: "#C1502E" }}
          >
            <LockIcon size={26} />
          </div>
          <h1 className="font-heading font-black text-2xl text-espresso">
            KustomXworks CRM
          </h1>
          <p className="text-sm text-[#6B5E52] mt-1">
            Lead Management &amp; Inbound Pipeline Portal
          </p>
        </div>

        <Suspense fallback={<div className="text-center py-8 text-sm text-[#8E7F72]">Loading authentication…</div>}>
          <LoginForm />
        </Suspense>

        <div className="mt-8 pt-6 border-t border-tan/40 text-center">
          <div className="flex items-center justify-center gap-2 text-xs text-[#8E7F72]">
            <ShieldCheckIcon size={14} className="text-rust" />
            <span>256-Bit Encrypted Session · TCPA &amp; CAN-SPAM Logged</span>
          </div>
          <div className="mt-4">
            <Link href="/" className="text-xs text-rust hover:underline">
              ← Return to KustomXworks Public Site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
