interface ChatMessageProps {
  name: string;
  message: string;
}

function ChatMessage({ name, message }: ChatMessageProps) {
  return (
    <div>
      {name}: <>{message}</>
    </div>
  );
}

export default ChatMessage;
