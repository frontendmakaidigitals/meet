import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-6">
        {/* ================= TITLE ================= */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-baskervville text-black mb-4">
            CONTACT US
          </h2>
          <p className="text-gray-600">
            Whether you are looking for electric mobility, power solutions,
            industrial products, or home appliances, our team is ready to help.
            <br />
            Talk to us to find the right product for your business needs.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* ================= FORM (2nd on mobile, right on desktop) ================= */}
          <div className="order-2 md:order-2 bg-gray-50 p-8 rounded-lg">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
                />
              </div>

              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-gray-600">
                <option>SELECT SERVICE</option>
                <option>Apparel & Footwear</option>
                <option>EV Vehicles</option>
                <option>Batteries</option>
                <option>Home Appliances</option>
                <option>Sleep & Beddings</option>
                <option>Travel Bags & Luggage</option>
              </select>

              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-gray-600">
                <option>ENQUIRY</option>
                <option>Product Information</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>

              <textarea
                placeholder="Leave your Message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
              />

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-3 rounded-full hover:bg-yellow-500 transition font-semibold"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* ================= CONTACT INFO (3rd on mobile, left on desktop) ================= */}
          <div className="order-3 md:order-1">
            <div className="mb-8">
              <h3 className="font-bold text-lg text-black mb-2">
                📞 +971 56 799 0150
              </h3>
              <p className="text-gray-600">Meetinfo@Meet.ae</p>
            </div>

            <div className="mb-8">
              <h4 className="font-bold mb-2 text-black">Head Office</h4>
              <p className="text-gray-600">
                Office 7, 3rd Business Building 2
                <br />
                Near Al Hamriya Saray
                <br />
                Dubai, United Arab Emirates
                <br />
                P.O. Box 5459
              </p>
            </div>

            <div>
              <h4 className="font-bold text-black mb-2">Branch Office</h4>
              <p className="text-gray-600">
                Sreepad Plaza, Marothuodu Bhasi
                <br />
                Road No 17
                <br />
                Thrissur, Kerala - 680001
                <br />
                Thrissur, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
