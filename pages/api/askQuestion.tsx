import { NextApiRequest, NextApiResponse } from "next";
import query from "../../lib/queryApi";

type Data = {
  answer: string;
};

export async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt!" });
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid chat ID!" });
    return;
  }

  const response = await query(prompt, chatId, model);

  const message: Message = {
    text: response || "Chatty was unable to find an answer for that!",
  };
}
