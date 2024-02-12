import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <div className="border-[1px] border-opacity-50 border-coralDark p-10 rounded-3xl">
      <h1 className="text-coralDark font-extrabold text-4xl mb-10 md:mb-0">
        FAQ'S
      </h1>
      <Accordion type="single" collapsible className="w-[70vw] text-white">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is a Rizz?</AccordionTrigger>
          <AccordionContent>
            A Rizz is a witty or clever response typically used in online
            conversations or dating apps to impress others or engage in playful
            banter.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Is the AI-generated content safe and appropriate?
          </AccordionTrigger>
          <AccordionContent>
            We employ strict content moderation and filtering mechanisms to
            ensure that all generated content is safe, appropriate, and
            compliant with community guidelines.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How does the AI-powered Rizz generator work?
          </AccordionTrigger>
          <AccordionContent>
            Our AI-powered Rizz generator utilizes advanced natural language
            processing (NLP) algorithms to analyze input prompts and generate
            contextually relevant and engaging responses.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Is my data secure and private?</AccordionTrigger>
          <AccordionContent>
            We prioritize user privacy and data security. All user data is
            encrypted and handled in compliance with industry standards and
            regulations. For more information, please refer to our Privacy
            Policy.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faqs;
