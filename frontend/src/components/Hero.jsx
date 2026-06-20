function Hero() {
  return (

    <section className="bg-linear-to-br from-blue-50 via-white to-purple-50 py-28 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>

          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">

            🚀 Summer 2026 Batch

          </div>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">

            AI & Robotics

            <span className="text-blue-600">

              {" "}Summer Workshop

            </span>

          </h1>

          <p className="text-lg text-gray-600 mt-6">

            Learn Artificial Intelligence, build robots, and create exciting real-world projects in just 4 weeks.

          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#register"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
            >

              Enroll Now

            </a>

            <a
              href="#details"
              className="border px-8 py-4 rounded-xl hover:bg-gray-100 transition"
            >

              Learn More

            </a>

          </div>

        </div>

        <div>

          <div className="bg-white rounded-3xl shadow-2xl p-10">

            <div className="grid grid-cols-2 gap-6 text-center">

              <div>

                <h3 className="text-4xl font-bold text-blue-600">

                  4

                </h3>

                <p>Weeks</p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-purple-600">

                  8-14

                </h3>

                <p>Years</p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-green-600">

                  ₹2999

                </h3>

                <p>Fee</p>

              </div>

              <div>

                <h3 className="text-4xl font-bold text-orange-600">

                  Live

                </h3>

                <p>Online</p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Hero;
