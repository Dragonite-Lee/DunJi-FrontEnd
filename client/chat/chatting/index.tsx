import Handler from './handler';
import Header from './header';
import History from './history';
import Notice from './notice';

const Chatting = () => {
  return (
    <div className="bg-background_beige sm:w-[375px] sm:m-auto h-screen">
      <Header />
      <main>
        <Notice />
        <History />
        <Handler />
      </main>
    </div>
  );
};

export default Chatting;
