import Header from 'client/chat/chatting/header';
import Handler from './handler';
import History from './history';
import Notice from './notice';

function Chatting() {
  return (
    <div className="bg-background_beige sm:w-[375px] sm:m-auto h-screen">
      <Header />
      <main className="flex flex-col h-[calc(100vh-60px)]">
        <Notice />
        <History />
        <Handler />
      </main>
    </div>
  );
}

export default Chatting;
