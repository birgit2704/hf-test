import { HfInference } from "@huggingface/inference";
import { useEffect, useState } from "react";

const TextToSpeech = () => {
  const [speechUrl, setSpeechUrl] = useState<string>();
  const token = import.meta.env.VITE_HF_TOKEN;

  const textToSpeech = "I finally managed to do this.";

  useEffect(() => {
    const hf = new HfInference(token);
    hf.textToSpeech({
      inputs: textToSpeech,
      model: "espnet/kan-bayashi_ljspeech_vits",
    })
      .then((res) => URL.createObjectURL(res))
      .then((data) => setSpeechUrl(data))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <audio src={speechUrl} controls></audio>
    </div>
  );
};

export default TextToSpeech;
