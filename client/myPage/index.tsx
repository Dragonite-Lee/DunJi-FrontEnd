import Content from 'client/myPage/index/content';
import Profile from 'client/myPage/index/Profile';
import SquareZone from 'client/myPage/index/squareZone';
import Header from 'components/layout/Header';
import TabBar from 'components/main/TabBar';

function MyPage() {
  return (
    <div className="bg-background_beige min-h-full sm:w-[375px] sm:m-auto pb-[120px]">
      <TabBar />
      <Header title="마이페이지" />
      <Profile />
      <SquareZone />
      <Content />
    </div>
  );
}

export default MyPage;
