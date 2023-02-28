import { chatApi } from '_api/chat';
import ChatList from 'client/chat/list';

interface ChatListPageProps {
  list: {
    chatRoomId: string;
    opponentName: string;
  }[];
  error?: boolean;
}
function ChatListPage({ list }: ChatListPageProps) {
  console.log('list: ', list);
  return <ChatList />;
}

export async function getServerSideProps() {
  try {
    const res = await chatApi.seek();
    console.log('res: ', res);

    return {
      props: { list: res?.data || [] },
    };
  } catch (e) {
    console.log('e: ', e);
    return {
      props: { list: [], error: true },
    };
  }
}

export default ChatListPage;
