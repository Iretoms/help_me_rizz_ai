import AiOption from "@/components/shared/AiOption";
import Faqs from "@/components/shared/Faqs";
import Testimonial from "@/components/shared/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  flex-col items-center">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex relative  overflow-hidden md:p-5 flex-col gap-4 items-start justify-start w-fit">
          <h1 className="text-textGray font-extrabold text-5xl md:text-6xl">
            Upgrade Your <br /> <span className="text-coralDark">Texting</span>{" "}
            Game!
          </h1>
          <p className="text-textGray font-extralight text-sm">
            Impress anyone with witty lines & AI-powered rizz responses. Want to
            be on <br /> their mind all day Always make sure you sprinkle some
            little rizz into that conversation
          </p>
          <Image
            className="absolute top-0 left-20 opacity-10 md:opacity-10"
            src="/spiral_alt.svg"
            alt="spiral"
            width={800}
            height={800}
          />
        </div>
        <div className="object-contain">
          <Image
            className="object-contain w-[100%]"
            src="/bubble.svg"
            alt="chat"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className="flex flex-col gap-36 items-center">
        <AiOption />
        <Faqs />
        <Testimonial />
      </div>
    </div>
  );
}
