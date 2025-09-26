function SendButton({onClick}:{onClick:()=>void}){
    return <button className="bg-gray-300 hover:bg-gray-400 text-white font-bold p-3 rounded-full" onClick={onClick}>
        <img src="send-message.png" alt="send message"  className="w-6" />
    </button>
}

export default SendButton