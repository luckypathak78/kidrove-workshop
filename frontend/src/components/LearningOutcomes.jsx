function LearningOutcomes() {

  const outcomes = [

    "Understand AI fundamentals",

    "Build simple robots",

    "Learn programming logic",

    "Work with sensors",

    "Create a final project",

  ];

  return (

    <section className="py-20 px-6 bg-gray-50">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">

          Learning Outcomes

        </h2>

        <div className="space-y-6">

          {outcomes.map((item) => (

            <div
              key={item}
              className="bg-white shadow-sm rounded-xl p-5"
            >

              ✅ {item}

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default LearningOutcomes;
