import Testimonial from "@/components/shared/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="">
        <div>
          <h1 className="">
            Upgrade Your <br /> <span className="text-coral">Dating</span> Game!
          </h1>
          <p className="">
            Impress anyone with witty lines & AI-powered rizz responses. want
            you to be on their mind all day Always make sure you sprinkle some
            little rizz into that conversation
          </p>
        </div>
        <Image
          className=""
          src="/spiral.svg"
          alt="spiral"
          width={500}
          height={500}
        />
        <div className="">
          <Image
            className="object-contain w-[100%]"
            src="/bubble.svg"
            alt="chat"
            width={300}
            height={300}
          />
        </div>
      </div>
      <Testimonial />
    </div>
  );
}
