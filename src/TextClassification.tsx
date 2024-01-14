import { HfInference } from "@huggingface/inference";

const TextClassification = () => {
  const token = import.meta.env.VITE_HF_TOKEN;
  const hf = new HfInference(token);
  const textToClassify = "help me, I am drowning";

  hf.textClassification({
    model: "SamLowe/roberta-base-go_emotions",
    inputs: textToClassify,
  }).then((res) => console.log(res[0].label));

  return <h1>TextClassification</h1>;
};

export default TextClassification;
