import { useState } from "react";

function FAQ() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "Do students need coding experience?",
      answer: "No. Beginners are welcome.",
    },
    {
      question: "Will sessions be recorded?",
      answer: "Yes. All sessions will be available.",
    },
    {
      question: "Is a certificate provided?",
      answer: "Yes, after successful completion.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="border rounded-xl p-5 cursor-pointer"
              onClick={() =>
                setOpen(open === index ? null : index)
              }
            >

              <div className="flex justify-between">

                <h3 className="font-bold">
                  {faq.question}
                </h3>

                <span>
                  {open === index ? "-" : "+"}
                </span>

              </div>

              {open === index && (

                <p className="mt-4 text-gray-600">

                  {faq.answer}

                </p>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;
