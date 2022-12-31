import { useCallback, ChangeEvent, KeyboardEvent, useState } from 'react';
import ChatMessage from 'client/chat/ChatMessage';
import useChat from 'client/chat/useChat';

const Chatting = () => {
  const { chat, sendMessage, live } = useChat();
  const [message, setMessage] = useState<string>('');

  const onSendMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(message);
    setMessage('');
  };

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      handleSendMessage();
    }
  };

  const renderChat = useCallback(() => {
    return chat.map(({ sender, message }, index) => (
      <ChatMessage key={index} name={sender} message={message} />
    ));
  }, [chat]);

  if (!live) {
    return <div>연결 필요</div>;
  }

  return (
    <div className="chatting_container">
      <div className="chatting_Room">{renderChat()}</div>
      <input
        className="chatting_messageInput"
        type="text"
        placeholder="메세지를 입력해주세요"
        onChange={onSendMessageChange}
        onKeyDown={onEnter}
        value={message}
      />
      <button className="chatting_sendMessage" onClick={handleSendMessage}>
        전송
      </button>
      <br />
    </div>
  );
};

export default Chatting;
