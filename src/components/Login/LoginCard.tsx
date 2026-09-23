"use client";

import { useState } from "react";
import FormInput from "./FormInput";

type Role = "admin" | "student";

export default function LoginCard() {
  const [role, setRole] = useState<Role>("admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // TODO: wire this up to the real auth endpoint once it exists, e.g.
    // await fetch("/api/login", { method: "POST", body: JSON.stringify({ role, username, password }) });
    console.log("login attempt", { role, username, password });

    setSubmitting(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[350px] rounded-[28px] border-[3px] border-[#e5252d] bg-[#ece3df]/90 px-8 py-9 shadow-2xl backdrop-blur-sm"
    >
      <p className="mb-6 text-center text-[20px] font-bold leading-snug text-[#c81f28]">
        &ldquo;Center of Excellence&rdquo;
      </p>

      <div className="flex flex-col gap-4">
        <FormInput
          icon="user"
          name="username"
          placeholder="Username"
          value={username}
          onChange={setUsername}
        />
        <FormInput
          icon="lock"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
        />
      </div>

      {/* Role toggle */}
      <div className="mt-4 flex items-center gap-6 text-[14px]">
        <label className="flex cursor-pointer items-center gap-2 text-[#c8383f]">
          <input
            type="radio"
            name="role"
            checked={role === "admin"}
            onChange={() => setRole("admin")}
            className="peer sr-only"
          />
          <span
            className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
              role === "admin" ? "border-[#3878f0]" : "border-neutral-300"
            }`}
          >
            {role === "admin" && (
              <span className="h-2.5 w-2.5 rounded-full bg-[#3878f0]" />
            )}
          </span>
          Admin/Staff
        </label>

        <label className="flex cursor-pointer items-center gap-2 text-[#c8383f]">
          <input
            type="radio"
            name="role"
            checked={role === "student"}
            onChange={() => setRole("student")}
            className="peer sr-only"
          />
          <span
            className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
              role === "student" ? "border-[#3878f0]" : "border-neutral-300"
            }`}
          >
            {role === "student" && (
              <span className="h-2.5 w-2.5 rounded-full bg-[#3878f0]" />
            )}
          </span>
          Student/Parents
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full rounded-xl bg-[#e5252d] py-3 text-[16px] font-semibold text-white transition-colors hover:bg-[#2f9e44] disabled:opacity-60"
      >
        {submitting ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
