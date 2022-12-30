import { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react';
import SockJS from 'sockjs-client';

const SERVER_URL = 'http://127.0.0.1:9999/echo';

interface ChatMessageType {
  name: string;
  message: string;
}

const Chatting = () => {
  const [live, setLive] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [serverUrl, setServerUrl] = useState<string>(SERVER_URL);
  const [chat, setChat] = useState<ChatMessageType[]>([]);
  const [sockjs, setSockjs] = useState<WebSocket | null>();

  const handleReceiveMessage = (e: MessageEvent) => {
    const newReceiveData = e.data;
    if (newReceiveData === '') return;
    setChat((chat) => [...chat, { name: 'Server', message: newReceiveData }]);
  };

  const handleSocketConnect = () => {
    const sock: WebSocket = new SockJS(serverUrl);

    sock.onmessage = handleReceiveMessage;

    setSockjs(sock);
    setChat([...chat, { name: 'testUser', message: '님이 입장하셨습니다.' }]);
    setLive(true);
  };

  const handleSocketDisConnect = () => {
    setLive(false);
  };

  const inputMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (message === '') return;
    if (!sockjs) return;

    setChat([...chat, { name: 'testUser', message: message }]);
    // console.log(sockjs);
    sockjs.send(message);
    setMessage('');
  };

  const handleChatServerURLChange = (e: ChangeEvent<HTMLInputElement>) => {
    setServerUrl(e.target.value);
  };

  const renderChat = useCallback(() => {
    return chat.map(({ name, message }, index) => (
      <ChatMessage key={index} name={name} message={message} />
    ));
  }, [chat]);

  if (!live) {
    return (
      <div className="chatting_container">
        <input
          className="chatting_urlInput"
          type="text"
          placeholder="URL을 입력해주세요"
          onChange={handleChatServerURLChange}
          value={serverUrl}
        />
        <button className="chatting_connectBtn" onClick={handleSocketConnect}>
          연결
        </button>
      </div>
    );
  }

  return (
    <div className="chatting_container">
      <div className="chatting_Room">{renderChat()}</div>
      <input
        className="chatting_messageInput"
        type="text"
        placeholder="메세지를 입력해주세요"
        onChange={inputMessage}
        onKeyDown={onEnter}
        value={message}
      />
      <button className="chatting_sendMessage" onClick={sendMessage}>
        전송
      </button>
      <br />
      <button
        className="chatting_disConnectBtn"
        onClick={handleSocketDisConnect}
      >
        연결 끊기
      </button>
    </div>
  );
};

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
export default Chatting;
