import useTabRedux from 'hooks/useTabRedux';
import {
  dispatchTabBarOpenHome,
  dispatchTabBarOpenSearch,
  dispatchTabBarOpenPlus,
  dispatchTabBarOpenChat,
  dispatchTabBarOpenMypage,
} from 'store/modules/tab';
import PostModal from './PostModal';
import Chat from './tabBar/Chat';
import Home from './tabBar/Home';
import Mypage from './tabBar/Mypage';
import Plus from './tabBar/Plus';
import Search from './tabBar/Search';

export default function TabBar() {
  const [state, dispatch] = useTabRedux();

  return (
    <>
      {state.TABBAR_OPEN_POSTMODAL ? <PostModal /> : null}
      <div className="min-w-[375px] sm:w-[375px] z-20 flex items-center justify-between fixed bottom-0 w-full h-[73px] bg-background_beige">
        <Home />
        <Search />
        <Plus />
        <Chat />
        <Mypage />
      </div>
    </>
  );
}
