import OpenAI from "openai";
import {
  icebreakerPrompts,
  dateNightPrompts,
  pickUpLinePrompt,
} from "@/constant";

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
export const pickUpLine = async () => {
  try {
    const randomPrompt =
      pickUpLinePrompt[Math.floor(Math.random() * pickUpLinePrompt.length)];
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a social experimenter with a knack for hilariously awkward interactions. Your latest video project involves testing out some of the most cringeworthy pickup lines on unsuspecting individuals. Set in a bustling city park or a crowded street corner, your mission is to capture genuine reactions while delivering these lines with absolute confidence (or lack thereof)",
        },
        {
          role: "user",
          content: `Give pickup line ideas ${randomPrompt}. List the ideas only.`,
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
export const flirtyResponse = async (
  myMessage: string,
  theirMessage: string
) => {
  try {
    const systemContent = `You're in a flirty conversation. 
    You: ${myMessage}
    Them: ${theirMessage}
    Keep the sparks flying with a clever yet flirty response.`;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemContent,
        },
        {
          role: "user",
          content: theirMessage,
        },
        {
          role: "user",
          content: myMessage,
        },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
    });

    const responseText = completion.choices[0].message.content;
      console.log(responseText)
    return responseText;
  } catch (error) {
    console.log(error);
  }
};
