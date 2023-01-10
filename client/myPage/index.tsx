import Content from 'client/myPage/Content';
import Profile from 'client/myPage/Profile';
import SquareZone from 'client/myPage/SquareZone';
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
