import { useState } from "react";
import axios from "axios";

function RegistrationForm() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post(
        `${API_URL}/api/enquiry`,
        form
      );

      setMessage(response.data.message);

      setForm({
        name: "",
        email: "",
        phone: "",
      });
    } catch (error) {

      console.log("Full Error:", error);
      console.log("Response:", error.response);
      
      setMessage(
        error.response?.data?.message ||
        "Something went wrong. Please try again."
      );
    }

    setLoading(false);
  };

  return (
    <section
      id="register"
      className="py-20 px-6 bg-gray-50"
    >
      <div className="max-w-xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
          Register Now
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-2xl p-10 border space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition disabled:opacity-60"
          >

            {loading
              ? "Submitting..."
              : "Enroll Now"}

          </button>

          {message && (

            <p className="text-center font-medium">

              {message}

            </p>

          )}

        </form>

      </div>
    </section>
  );
}

export default RegistrationForm;
