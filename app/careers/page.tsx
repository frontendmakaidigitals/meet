"use client";
import Image from "next/image";
import { User, User2Icon, Users } from "lucide-react";
import { useState } from "react";

type FormData = {
  name: string;
  contact: string;
  email: string;
  file: File | null;
  country: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;
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

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    }

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
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(form.file.type)) {
        newErrors.file = "Only PDF or Word documents are accepted.";
      } else if (form.file.size > 5 * 1024 * 1024) {
        newErrors.file = "File size must be under 5MB.";
      }
    }

    if (!form.country || form.country === "") {
      newErrors.country = "Please select your country.";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
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
    // TODO: submit form data to your API here
  };
  return (
    <main>
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center py-32 md:min-h-[calc(100vh-100px)] text-center px-4 pb-32 md:pb-20">
        <Image
          src="/careers/hero.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-10 max-w-4xl pb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-rubik mb-6">
            Join Our Team
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Be part of a dynamic and growing organization where innovation,
            collaboration, and excellence drive everything we do. We believe in
            empowering our people, fostering creativity, and creating
            opportunities for professional growth. If you're passionate,
            motivated, and ready to make an impact, we’d love to have you on our
            journey toward building meaningful solutions and lasting success
            together.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full px-4 flex justify-center z-20">
          <div className="bg-white rounded-3xl shadow-lg px-8 md:px-12 py-8 flex flex-col md:flex-row gap-8 md:gap-16 w-full max-w-4xl">
            {/* Card 1 - Syed Rizvi */}
            <div className="flex items-center gap-5 flex-1">
              <div className="flex-shrink-0 border rounded-full p-3">
                <User2Icon className="size-20" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-lg mb-2">Syed Rizvi</p>
                <div className="space-y-1 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <span>📞</span>
                    <a href="tel:+97150483346" className="hover:text-gray-900">
                      +971 50 1483346
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>✉️</span>
                    <a
                      href="mailto:info@meuniversal.com"
                      className="hover:text-gray-900 break-all"
                    >
                      info@meuniversal.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Divider - hidden on mobile */}
            <div className="hidden md:block w-px bg-gray-200"></div>

            {/* Card 2 - Shaik Hassain */}
            <div className="flex items-center gap-5 flex-1">
              <div className="flex-shrink-0 border rounded-full p-3">
                <User2Icon className="size-20" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-lg mb-2">Shaik Hassain</p>
                <div className="space-y-1 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <span>📞</span>
                    <a
                      href="tel:+971559398870227"
                      className="hover:text-gray-900"
                    >
                      +91-9398870227
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>✉️</span>
                    <a
                      href="mailto:info@meuniversal.com"
                      className="hover:text-gray-900 break-all"
                    >
                      info@meuniversal.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section className="container mx-auto mt-44 md:mt-32 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-rubik mb-6">
          Career Opportunities
        </h2>

        <div className="max-w-5xl mx-auto text-left text-gray-700 space-y-4 ">
          <p>
            We believe that our employee’s personal and professional success is
            the organization’s success. We work to attract talented individuals
            and give them needed support and tools to succeed, our mission is to
            make each one of our employees a successful person within our
            organization.
          </p>
          <p>
            We realize that our human resources are our most asset, to maintain
            success and reach our goals of growth; we invest in our human
            capital. We strive to create a productive, team structured, work
            environment that focuses on diversity, honesty and talent. Year
            after year, our vision is to create a success story for each of our
            employees by surrounding them with a truly productive and efficient
            work environment.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-[#FFFCF6] relative mb-[350px] h-[480px] mt-20 px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-2xl md:text-3xl font-rubik mb-3">
            Fill the form below and upload your updated C.V.
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            It doesn’t matter if we have a vacancy or not — if you are talented,
            we will take you onboard.
          </p>
        </div>

        {/* FORM */}
        <div className=" lg:absolute left-1/2 lg:min-w-xl lg:-translate-x-1/2 bottom-0 lg:translate-y-1/2 ">
          {submitted ? (
            <div className="bg-white border rounded-2xl p-10 w-full max-w-lg text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold mb-2">
                Application Submitted!
              </h3>
              <p className="text-gray-500 text-sm">
                Thank you for your interest. We'll be in touch soon.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white border rounded-2xl p-6 md:p-10 w-full max-w-lg"
            >
              <div className="space-y-4 text-sm">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-400 ${
                      errors.name ? "border-red-400 bg-red-50" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Contact */}
                <div>
                  <input
                    type="text"
                    name="contact"
                    placeholder="Contact Number*"
                    value={form.contact}
                    onChange={handleChange}
                    className={`w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-400 ${
                      errors.contact ? "border-red-400 bg-red-50" : ""
                    }`}
                  />
                  {errors.contact && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.contact}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={form.email}
                    onChange={handleChange}
                    className={`w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-400 ${
                      errors.email ? "border-red-400 bg-red-50" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* File */}
                <div>
                  <input
                    type="file"
                    name="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className={`w-full border rounded px-3 py-2 ${
                      errors.file ? "border-red-400 bg-red-50" : ""
                    }`}
                  />
                  <p className="text-gray-400 text-xs mt-1">
                    Accepted: PDF, DOC, DOCX — max 5MB
                  </p>
                  {errors.file && (
                    <p className="text-red-500 text-xs mt-1">{errors.file}</p>
                  )}
                </div>

                {/* Country */}
                <div>
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className={`w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-400 ${
                      errors.country ? "border-red-400 bg-red-50" : ""
                    }`}
                  >
                    <option value="">Your Country*</option>
                    <option value="UAE">UAE</option>
                    <option value="India">India</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.country && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.country}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <button
                  type="submit"
                  className="block mx-auto mt-6 bg-yellow-500 hover:bg-yellow-600 transition text-white px-6 py-2 rounded-md text-sm"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default CareersPage;
