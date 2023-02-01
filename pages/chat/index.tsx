import ChatList from 'client/chat/list';

function ChatListPage() {
  return <ChatList />;
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default ChatListPage;
