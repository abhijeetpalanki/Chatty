import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openai
    .createChatCompletion({
      model,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.9,
      max_tokens: 1000,
    })
    .then((res) => res.data.choices[0].message?.content)
    .catch(
      (err) => `
        Chatty was unable to find an answer for that! (Error: ${err.message})
      `
    );

  return res;
};

export default query;
