import { HfInference } from "@huggingface/inference";

const TextTranslation = () => {
  const token = import.meta.env.VITE_HF_TOKEN;
  const hf = new HfInference(token);
  const textToTranslate = "These are interesting times to be an AI Engineer";

  hf.translation({
    model: "facebook/mbart-large-50-many-to-many-mmt",
    inputs: textToTranslate,
    //@ts-expect-error: no idea!
    parameters: {
      src_lang: "en_XX",
      tgt_lang: "fr_XX",
    },
  }).then((res) => console.log(res));

  return <h1>TextTranslation</h1>;
};

export default TextTranslation;
