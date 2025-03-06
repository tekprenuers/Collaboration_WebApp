import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I have to Pay to use Headerfy?",
    answer:
      "No, Headerfy offers a free plan with basic features. However, premium features require a paid subscription.",
  },
  {
    question: "How do paid plans work?",
    answer:
      "Paid plans provide additional features such as increased storage, priority support, and exclusive content.",
  },
  {
    question: "How do I upgrade my Free account to Paid?",
    answer:
      "You can upgrade your account by visiting the pricing page and selecting a plan that suits your needs.",
  },
  {
    question: "Can I make some or all of my content Private?",
    answer:
      "Yes, you can control content privacy settings from your account dashboard.",
  },
  {
    question:
      "We're interested in a Team/Enterprise account. How can we set up a live demo?",
    answer:
      "Please contact our sales team through the website to schedule a live demo.",
  },
  {
    question: "What happens to my content when I cancel my subscription?",
    answer:
      "Your content remains accessible, but premium features will be disabled after cancellation.",
  },
];

const Pricing_Bnr_5: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="p-4 md:p-[7%]">
      {" "}
      <div className="">
        <h2 className="md:text-2xl px-4 md:px-1 font-semibold text-center mb-6">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 text-start text-[16px] font-medium text-gray-800"
              >
                <span className="pr-4">{faq.question}</span>
                <ChevronDown
                  className={`transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  size={19}
                />
              </button>

              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden text-gray-600 pb-4 text-[12px]"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing_Bnr_5;
