"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email.");
      return;
    }
    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }
    setMessage("Logged in (mock). Redirecting to dashboard...");
  };

  return (
    <div className="section-padding container-wide max-w-md">
      <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
        <h1 className="text-2xl font-bold text-slate-900">Login</h1>
        <p className="mt-1 text-sm text-slate-600">
          Access your courses and test analytics.
        </p>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-semibold text-slate-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              placeholder="••••••••"
              required
            />
          </div>
          {message && <p className="text-sm text-primary">{message}</p>}
          <Button type="submit" fullWidth>
            Login
          </Button>
        </form>
        <p className="mt-4 text-sm text-slate-600">
          New here?{" "}
          <Link className="text-primary hover:underline" href="/register">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

