import React, { useState, useEffect } from "react";
import VoiceButton from "./VoiceButton";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

function HeroSection() {
  const { transcript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [text, setText] = useState("")

  useEffect(() => {
    if (listening) {
      setText(transcript);
    }
  }, [transcript, listening]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startRecording = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
  };

  const stopRecording = () => {
    SpeechRecognition.stopListening();
  };

  return (
    <div className="p-8 rounded-lg font-outfit">
      <h2 className="text-2xl font-bold mb-4 text-gray-500">
        Tell us what’s <span className="text-black">bothering</span> you.
      </h2>

      <div>
        <textarea
          name="symptoms"
          id="symptoms"
          cols={50}
          rows={5}
          className="border-2 border-gray-300 p-2 rounded-lg m-4"
          value={text}
          readOnly={listening}
          onChange={(e) => setText(e.target.value)}
        />
        <VoiceButton startRecording={startRecording} stopRecording={stopRecording} />
      </div>

      {listening && (
        <p className="text-center font-semibold text-red-500">
          🔴 Your voice is currently being recorded
        </p>
      )}
    </div>
  );
}

export default HeroSection;
