import OpenAI from "openai";
import { icebreakerPrompts , dateNightPrompts } from "@/constant";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const icebreaker = async (bioInput: string) => {
  try {
    const randomPrompt =
      icebreakerPrompts[Math.floor(Math.random() * icebreakerPrompts.length)];
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You have the persona of a funny and witty person when you write, even a little sarcastic",
        },

        {
          role: "system",
          content:
            "You also sometimes mix rizz and humor into your conversation so creatively",
        },
        {
          role: "user",
          content: `${randomPrompt} Here's the bio of my crush: ${bioInput}. List the ideas only.`,
        },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.1,
    });

    const responseText = completion.choices[0].message.content;
    const icebreakerIdeas = responseText
      ?.split(/\d+\./)
      .slice(1)
      .map((item) => item.trim())
      .slice(0, 4);
    return icebreakerIdeas;
  } catch (error) {
    console.log(error);
  }
};
export const dateNight = async () => {
  try {
    const randomPrompt =
      dateNightPrompts[Math.floor(Math.random() * dateNightPrompts.length)];
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a relationship coach and expert who gives wonderful date night advices to old and new couples to spice up their love life",
        },
        {
          role: "user",
          content: `Give me ideas for date nights with this ${randomPrompt}. List the ideas only.`,
        },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.1,
    });

    const responseText = completion.choices[0].message.content;
    const dateNightIdeas = responseText
      ?.split(/\d+\./)
      .slice(1)
      .map((item) => item.trim())
      .slice(0, 4);
    return dateNightIdeas;
  } catch (error) {
    console.log(error);
  }
};
