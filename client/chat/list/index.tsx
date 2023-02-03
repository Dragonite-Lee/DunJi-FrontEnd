import { useRouter } from 'next/router';
import ChatItem from 'client/chat/list/ChatItem';
import ChatListNav from 'client/chat/list/Nav';
import Header from 'components/layout/Header';

function ChatList() {
  const router = useRouter();
  const handleChatClick = () => {
    const id = '/chat/1';
    router.push(id);
  };
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
