import { useSelector } from 'react-redux';

import { RootState } from 'types';
import PostModal from './PostModal';
import Chat from './tabBar/Chat';
import Home from './tabBar/Home';
import Mypage from './tabBar/Mypage';
import Plus from './tabBar/Plus';
import Search from './tabBar/Search';

function TabBar() {
  const { TABBAR_OPEN_POSTMODAL } = useSelector(
    (state: RootState) => state.tab,
  );

  return (
    <>
      {TABBAR_OPEN_POSTMODAL ? <PostModal /> : null}
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

export default TabBar;
