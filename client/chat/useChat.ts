import { useState, useEffect, useCallback } from 'react';
import SockJS from 'sockjs-client';
import { ChatMessageType } from 'client/chat/type';

const SERVER_URL = 'http://127.0.0.1:9999/echo';

interface useChatReturn {
  chat: ChatMessageType[];
  sendMessage: (message: string) => boolean | undefined;
  live: boolean;
}

const useChat = (serverUrl: string = SERVER_URL): useChatReturn => {
  const [live, setLive] = useState<boolean>(false);
  const [chat, setChat] = useState<ChatMessageType[]>([]);
  const [sockjs, setSockjs] = useState<WebSocket | null>();

  const handleChatMessage = (sender: string, message: string) => {
    setChat((chat) => [...chat, { sender: sender, message: message }]);
  };

  const handleSocketConnect = useCallback(() => {
    const sock: WebSocket = new SockJS(serverUrl);

    const handleReceiveMessage = (newReceiveData: string) => {
      handleChatMessage('Server', newReceiveData);
    };

    sock.onmessage = (e: MessageEvent) => {
      const newReceiveData = e.data;
      if (newReceiveData === '') return;

      handleReceiveMessage(newReceiveData);
    };

    setSockjs(sock);
    handleChatMessage('testUser', '님이 입장하셨습니다.');
    setLive(true);
  }, [serverUrl]);

  const handleSocketDisConnect = () => {
    setLive(false);
    setChat(() => []);
    setSockjs(null);
  };

  const sendMessage = (message: string) => {
    if (message === '') return;
    if (!sockjs) return;

    setChat([...chat, { sender: 'testUser', message: message }]);
    try {
      sockjs.send(message);
      return true;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    handleSocketConnect();

    return () => {
      handleSocketDisConnect();
    };
  }, []);

  return {
    chat,
    live,
    sendMessage,
  };
};

export default useChat;
