"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can you provide references or case studies from past clients?",
    answer: "Certainly! We have a rich portfolio of satisfied clients and success stories that showcase our capabilities and results.",
  },
  {
    question: "How can I stay updated on new services and offers?",
    answer: "Subscribe to our newsletter or follow us on social media. We regularly share updates, promotions, and valuable insights to keep you informed.",
  },
  {
    question: "Are your services available internationally?",
    answer: "Yes, we provide our services globally. We have a strong network of partners and professionals to cater to international clients.",
  },
  {
    question: "Can you handle both small and large-scale marketing campaigns?",
    answer: "Absolutely! Our experienced team can tailor marketing campaigns for businesses of all sizes, ensuring effective and targeted reach.",
  },
  {
    question: "How can I get started with your services?",
    answer: "Simply reach out to us via our website or contact our team directly. We'll guide you through the process and craft a solution that meets your specific needs.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Client Asked <span className="text-primary">Questions..</span>
          </h2>
          <p className="text-muted-foreground">We love to Chat with our Clients!</p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary transition-colors"
            >
              <AccordionTrigger className="text-foreground text-left hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
