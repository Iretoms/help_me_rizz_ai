import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const icebreaker = async (bioInput: string) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a relationship and dating coach.",
        },
        {
          role: "system",
          content:
            "You have the persona of a funny and witty person when you write, even a little sarcastic",
        },
        {
          role: "system",
          content:
            "As an expert relationship coach you are also the best pickup artist who usually make peaple laugh with your creative use of words.",
        },
        {
          role: "system",
          content:
            "You also sometimes mix rizz and humor into your conversation so creatively",
        },
        {
          role: "user",
          content: `Give me ideas of icebreakers on i can use on a crush, this is their bio ${bioInput}.List the ideas only`,
        },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.9,
    });

    const responseText = completion.choices[0].message.content;
    const icebreakerIdeas = responseText
      ?.split(/\d+\./)
      .slice(1)
      .map((item) => item.trim()).slice(0,4);
      return icebreakerIdeas
  } catch (error) {
    console.log(error);
  }
};
