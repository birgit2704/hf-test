import { HfInference } from "@huggingface/inference";

const TextGeneration = () => {
  const token: string = import.meta.env.VITE_HF_TOKEN;
  const hf = new HfInference(token);
  console.log(token);
  console.log(hf);

  const textToGenerate = "The definition of machine learning inference is";

  hf.textGeneration({
    inputs: textToGenerate,
    model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
  }).then((res) => console.log(res));

  return <h1>TextGeneration</h1>;
};

export default TextGeneration;
