function WorkshopDetails() {
  const details = [
    {
      title: "Age Group",
      value: "8–14 Years",
    },
    {
      title: "Duration",
      value: "4 Weeks",
    },
    {
      title: "Mode",
      value: "Online",
    },
    {
      title: "Fee",
      value: "₹2,999",
    },
    {
      title: "Start Date",
      value: "15 July 2026",
    },
  ];

  return (
    <section className="py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Workshop Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">

          {details.map((item) => (

            <div
              key={item.title}
              className="shadow-md border rounded-2xl p-6 text-center hover:-translate-y-2 transition"
            >

              <h3 className="font-semibold text-gray-500">
                {item.title}
              </h3>

              <p className="mt-3 text-xl font-bold">
                {item.value}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WorkshopDetails;
