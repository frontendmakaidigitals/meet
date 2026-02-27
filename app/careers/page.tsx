"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

type FormData = {
  name: string;
  contact: string;
  email: string;
  file: File | null;
  country: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const PERKS = [
  "Competitive compensation packages",
  "Collaborative cross-border teams",
  "Continuous learning & development",
  "Real impact from day one",
];

const CareersPage = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    contact: "",
    email: "",
    file: null,
    country: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.contact.trim()) {
      newErrors.contact = "Contact number is required.";
    } else if (!/^\+?[0-9\s\-]{7,15}$/.test(form.contact.trim())) {
      newErrors.contact = "Enter a valid contact number.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.file) {
      newErrors.file = "Please upload your CV.";
    } else {
      const allowed = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowed.includes(form.file.type))
        newErrors.file = "Only PDF or Word documents are accepted.";
      else if (form.file.size > 5 * 1024 * 1024)
        newErrors.file = "File size must be under 5MB.";
    }
    if (!form.country) newErrors.country = "Please select your country.";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData])
      setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setForm((prev) => ({ ...prev, file }));
    if (errors.file) setErrors((prev) => ({ ...prev, file: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const inputCls = (err?: string) =>
    `w-full border rounded-lg px-3.5 py-2.5 text-sm outline-none transition bg-white text-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 ${
      err ? "border-red-400 bg-red-50" : "border-gray-300"
    }`;

  return (
    <main className="overflow-x-hidden">
      {/* ─── HERO ─── */}
      <section
        className="relative flex items-center justify-center text-center pt-32 py-20 px-4 overflow-hidden"
        style={{ minHeight: "48vh" }}
      >
        <Image
          src="/careers/backgrund.jpg"
          alt=""
          fill
          className="object-left object-cover lg:object-top "
          priority
        />
        <div className="absolute inset-0 bg-black/40 w-full h-full" />

        <div className="relative z-10 max-w-2xl">
          <div className="bg-amber-50 inline-flex text-primary items-center gap-2 border text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            <Sparkles className="size-3" /> We're Hiring
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-rubik text-gray-200 leading-tight mb-4">
            Join Our <span className="text-primary">Team</span>
          </h1>
          <p className="text-base text-gray-300 md:text-lg leading-relaxed">
            Be part of a growing organization where innovation, collaboration,
            and excellence drive everything we do.
          </p>
        </div>
      </section>

      {/* ─── DIVIDER ─── */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(20,184,166,0.3), transparent)",
        }}
      />

      {/* ─── MAIN: TEXT + FORM ─── */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* ── LEFT ── */}
          <div className="">
            <p className="text-xs text-primary font-semibold tracking-widest uppercase mb-3">
              Career Opportunities
            </p>
            <h2 className="text-3xl md:text-4xl font-rubik font-[500] leading-snug mb-5">
              Your next chapter
              <br />
              starts <span className="text-primary">here</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-sm leading-relaxed mb-8">
              <p>
                We believe our employees' personal and professional success{" "}
                <em>is</em> the organization's success. We attract talented
                individuals and give them the support and tools to thrive.
              </p>
              <p>
                It doesn't matter if we have a vacancy or not — if you are
                talented, we will take you onboard.
              </p>
            </div>

            <ul className="space-y-3">
              {PERKS.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-3 text-sm  text-gray-700"
                >
                  <span className="flex-shrink-0 border border-amber-100 bg-amber-50 w-5 h-5 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="size-3 text-yellow-400" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            {/* accent line */}
            <div className="mt-10 flex items-center gap-2 opacity-30">
              <div className="h-px w-10" style={{ background: "#2dd4bf" }} />
              <div
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#2dd4bf" }}
              />
              <div className="h-px w-5" style={{ background: "#2dd4bf" }} />
            </div>
          </div>

          {/* ── RIGHT: FORM ── */}
          <div className="rounded-2xl border border-amber-50 bg-gray-100 p-6 md:p-8">
            {submitted ? (
              <div className="py-12 text-center">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                  style={{
                    background: "rgba(20,184,166,0.15)",
                    border: "1px solid rgba(20,184,166,0.3)",
                  }}
                >
                  <CheckCircle2
                    className="size-8"
                    style={{ color: "#2dd4bf" }}
                  />
                </div>
                <h3 className="text-xl font-rubik text-white mb-2">
                  Application Submitted!
                </h3>
                <p className="text-sm" style={{ color: "#94a3b8" }}>
                  Thank you for your interest. We'll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      value={form.name}
                      onChange={handleChange}
                      className={inputCls(errors.name)}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="contact"
                      placeholder="Contact Number *"
                      value={form.contact}
                      onChange={handleChange}
                      className={inputCls(errors.contact)}
                    />
                    {errors.contact && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.contact}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={handleChange}
                    className={inputCls(errors.email)}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className={inputCls(errors.country)}
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="">Your Country *</option>
                    <option value="UAE">UAE</option>
                    <option value="India">India</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.country && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.country}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className={`flex items-center bg-white gap-3 rounded-lg px-4 py-3 cursor-pointer transition border ${errors.file ? "border-red-400" : " border-gray-400/50"}`}
                    style={{
                      background: errors.file ? "rgba(239,68,68,0.07)" : "",
                    }}
                  >
                    <span className="text-lg">📎</span>
                    <span className="text-sm">
                      {form.file ? (
                        <span style={{ color: "#2dd4bf" }}>
                          {form.file.name}
                        </span>
                      ) : (
                        <>
                          <span className="text-gray-400">
                            Upload CV · PDF, DOC, DOCX — max 5MB
                          </span>{" "}
                        </>
                      )}
                    </span>
                    <input
                      type="file"
                      name="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="sr-only"
                    />
                  </label>
                  {errors.file && (
                    <p className="text-red-400 text-xs mt-1">{errors.file}</p>
                  )}
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Message (optional)"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border bg-white border-gray-300 placeholder:text-gray-400 rounded-lg px-3.5 py-2.5 text-sm outline-none transition resize-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full shadow-md font-rubik text-white hover:bg-primary/90 flex items-center bg-primary justify-center gap-2 font-semibold px-6 py-3 rounded-lg text-sm transition-all duration-300 hover:scale-[1.01]"
                >
                  Submit Application <ArrowRight className="size-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;
