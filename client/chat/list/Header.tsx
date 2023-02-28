import router from 'next/router';
import Header from 'components/layout/Header';

function ChattingListHeader() {
  const handleMainMove = () => {
    router.push('/');
  };

  return <Header backAction={handleMainMove} title={'채팅'} />;
}

export default ChattingListHeader;
