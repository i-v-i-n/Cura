type VoiceButtonProps = {
    startRecording: () => void;
    stopRecording: () => void;
};

function VoiceButton({ startRecording, stopRecording }: VoiceButtonProps) {
    return (
        <button onMouseDown={startRecording} onMouseUp={stopRecording} onTouchStart={startRecording} onTouchCancel={stopRecording} className="bg-gray-300 hover:bg-gray-400 text-white font-bold p-3 rounded-full">
            <img src="waveform-path.png" alt="record button" className="w-6" />
        </button>
    );
}
export default VoiceButton