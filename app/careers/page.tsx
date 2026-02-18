import Image from "next/image";
import { Users } from "lucide-react";
const CareersPage = () => {
  return (
    <main>
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] md:min-h-[calc(100vh-100px)] text-center px-4 pb-32 md:pb-20">
        <Image
          src="/careers/hero.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-10 max-w-2xl">
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
              <div className="flex-shrink-0">
                <img
                  src="/careers/user.png"
                  alt="Syed Rizvi"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-contain ring-2 ring-gray-100"
                />
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
              <div className="flex-shrink-0">
                <img
                  src="/careers/user.png"
                  alt="Shaik Hassain"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-contain ring-2 ring-gray-100"
                />
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
      <section className="container mx-auto mt-24 md:mt-32 px-4 text-center">
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
            Fill the form below and upload your updated C.V
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            It doesn’t matter if we have a vacancy or not — if you are talented,
            we will take you onboard.
          </p>
        </div>

        {/* FORM */}
        <div className=" lg:absolute left-1/2 lg:-translate-x-1/2 bottom-0 lg:translate-y-1/2 ">
          <form className="bg-white border rounded-2xl p-6 md:p-10 w-full max-w-lg">
            <div className="space-y-4 text-sm">
              <input
                type="text"
                placeholder="Name*"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="text"
                placeholder="Contact Number*"
                className="w-full border rounded px-3 py-2"
              />
              <input
                type="email"
                placeholder="Email*"
                className="w-full border rounded px-3 py-2"
              />
              <input type="file" className="w-full border rounded px-3 py-2" />
              <select className="w-full border rounded px-3 py-2">
                <option>Your Country</option>
              </select>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full border rounded px-3 py-2"
              />

              <button
                type="submit"
                className="block mx-auto mt-6 bg-yellow-500 hover:bg-yellow-600 transition text-white px-6 py-2 rounded-md text-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;
