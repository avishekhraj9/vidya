"use client";

import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";
import { useState } from "react";

type QueryType = "Admission" | "Demo Class" | "Other";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    queryType: "Admission" as QueryType
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return "Please fill in name, email, and message.";
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      return "Enter a valid email.";
    }
    if (form.phone && form.phone.replace(/\D/g, "").length < 10) {
      return "Enter a valid phone number.";
    }
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validate();
    if (validation) {
      setError(validation);
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("Thanks! We will reach out within 24 hours.");
  };

  return (
    <div className="section-padding container-wide space-y-10" id="contact">
      <SectionHeader title="Contact Us" subtitle="We are here to help" align="left" />

      <div className="grid gap-8 lg:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-slate-700">Name</label>
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
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-slate-700">Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">Type of Query</label>
              <select
                name="queryType"
                value={form.queryType}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              >
                <option>Admission</option>
                <option>Demo Class</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
              placeholder="Share your requirements"
              required
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          {success && <p className="text-sm text-green-700">{success}</p>}
          <Button type="submit">Submit</Button>
        </form>

        <div className="space-y-4">
          <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-slate-100">
            <h3 className="text-lg font-semibold text-slate-900">Reach Us</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>Address: 123, Knowledge Park, Patna</li>
              <li>Phone: +91 98765 43210</li>
              <li>Email: hello@vidyags.in</li>
              <li>
                WhatsApp:{" "}
                <a className="text-primary hover:underline" href="#">
                  Chat now
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-900 p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">
              Map
            </p>
            <div className="mt-3 h-40 rounded-xl bg-slate-800" />
            <p className="mt-3 text-sm text-slate-200">
              Find us near Knowledge Park metro. Walk-ins welcome 10 AM - 6 PM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

