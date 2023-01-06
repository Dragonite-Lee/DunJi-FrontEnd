import Chatting from 'client/chat/chatting';
import { wrapper } from 'store/index';

const ChattingPage = () => {
  return <Chatting />;
};

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return {
    props: {},
  };
});

export default ChattingPage;
