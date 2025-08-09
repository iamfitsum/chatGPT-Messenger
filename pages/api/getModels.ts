import type { NextApiRequest, NextApiResponse } from "next";
import openai from "@/lib/chatgpt";

type Option = {
  value: string;
  label: string;
};

type Data = {
  modelOptions: Option[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const models = await openai.models.list();
  const modelOptions = models.data.map((model) => ({
    value: model.id,
    label: model.id,
  }));

  res.status(200).json({ modelOptions });
}
