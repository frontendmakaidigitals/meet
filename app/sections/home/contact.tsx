import React from "react";

const Contact = ({ color = "bg-[#FFEDEE]" }: { color?: string }) => {
  return (
    <section className={`py-12 ${color} mb-14`} id="contact">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* ================= LEFT: TITLE & DESCRIPTION ================= */}
          <div>
            <h2 className="text-4xl font-rubik text-black mb-4 leading-tight">
              Have Questions? We Have Answers
            </h2>
            <div className="space-y-3 text-gray-600 text-lg">
              <p>
                Whether you are looking for electric mobility, power solutions,
                industrial products, or home appliances, our team is ready to
                help.
              </p>
              <p>
                Talk to us to find the right product for your business needs.
              </p>
            </div>
          </div>

          {/* ================= RIGHT: FORM ================= */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form className="space-y-3">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-gray-600">
                  <option>SELECT SERVICE</option>
                  <option>Apparel & Footwear</option>
                  <option>EV Vehicles</option>
                  <option>Batteries</option>
                  <option>Home Appliances</option>
                  <option>Sleep & Beddings</option>
                  <option>Travel Bags & Luggage</option>
                </select>

                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary text-gray-600">
                  <option>ENQUIRY</option>
                  <option>Product Information</option>
                  <option>Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <textarea
                placeholder="Leave your Message"
                rows={3}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />

              <button
                type="submit"
                className="w-full bg-primary text-white py-2.5 rounded-full hover:bg-yellow-500 transition font-semibold"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
