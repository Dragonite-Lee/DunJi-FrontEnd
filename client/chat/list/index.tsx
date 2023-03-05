import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { chatApi } from '_api/chat';
import ChatItem from 'client/chat/list/ChatItem';
import ChatListNav from 'client/chat/list/Nav';
import Header from 'components/layout/Header';

function ChatList() {
  const router = useRouter();
  const handleChatClick = () => {
    const id = '/chat/1';
    router.push(id);
  };

  const getSeekRoomList = async () => {
    try {
      const res = await chatApi.seek();
      // const res = await testApi.test();
      console.log('res: ', res);
    } catch (error) {
      console.log('error: ', error);
    }
  };

  useEffect(() => {
    getSeekRoomList();
  }, []);

  return (
    <>
      <ChatListNav />
      <div className="min-w-[375px] sm:w-[375px] h-full sm:h-screen bg-background_beige px-4 divide-y divide-stone-200">
        <ChatItem onClick={handleChatClick} />
        <hr className="" />
        <ChatItem onClick={handleChatClick} />
        <hr className="" />
        <ChatItem onClick={handleChatClick} />
        <hr className="" />
      </div>
    </>
  );
}

function ChatListLayout() {
  return (
    <div className="bg-background_beige sm:w-[375px] sm:m-auto h-screen">
      <Header title="채팅" />
      <div className="min-w-[375px] sm:w-[375px] h-full sm:h-screen bg-background_beige  ">
        <ChatList />
      </div>
    </div>
  );
}

export default ChatListLayout;
