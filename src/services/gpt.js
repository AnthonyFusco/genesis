import { Configuration, OpenAIApi } from "openai";
import { PUBLIC_OPENAI_API_KEY } from "$env/static/public";
import { encoding_for_model } from "@dqbd/tiktoken";

const configuration = new Configuration({
  apiKey: PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function chat() {
  /* const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Who is Depardieu ?",
  });
  return completion.data.choices[0].text; */
  return "placeholder response";
}

export function computeTokens() {
  const encTurbo = encoding_for_model("gpt-3.5-turbo");
  const encGPT4 = encoding_for_model("gpt-4");
  const str =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
  const gpt4Tokens = encGPT4.encode(str).length;
  const turboTokens = encTurbo.encode(str).length;
  encTurbo.free();
  encGPT4.free();
  return {
    gpt4: gpt4Tokens,
    turbo: turboTokens,
  };
}
