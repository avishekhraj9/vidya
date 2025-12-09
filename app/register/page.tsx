"use client";

import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setMessage("Name is required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setMessage("Please enter a valid email.");
      return;
    }
    if (form.password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }
    if (form.password !== form.confirm) {
      setMessage("Passwords do not match.");
      return;
    }
    setMessage("Account created (mock). You can now login.");
  };

  return (
    <div className="section-padding container-wide max-w-md">
      <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
        <h1 className="text-2xl font-bold text-slate-900">Create Account</h1>
        <p className="mt-1 text-sm text-slate-600">
          Get access to courses, materials, and test analytics.
        </p>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm font-semibold text-slate-700">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700">Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              placeholder="••••••••"
              required
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700">
              Confirm Password
            </label>
            <input
              name="confirm"
              type="password"
              value={form.confirm}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              placeholder="••••••••"
              required
            />
          </div>
          {message && <p className="text-sm text-primary">{message}</p>}
          <Button type="submit" fullWidth>
            Create account
          </Button>
        </form>
        <p className="mt-4 text-sm text-slate-600">
          Already have an account?{" "}
          <Link className="text-primary hover:underline" href="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

