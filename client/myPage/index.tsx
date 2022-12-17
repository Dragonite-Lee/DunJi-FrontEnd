import TabBar from 'components/main/TabBar';
import Content from 'client/myPage/content';
import Header from 'client/myPage/header';
import Profile from 'client/myPage/profile';
import SquareZone from 'client/myPage/squareZone';

function Mypage() {
  return (
    <div className="bg-background_beige min-h-full sm:w-[375px] sm:m-auto pb-[120px]">
      <TabBar />
      <Header />
      <Profile />
      <SquareZone />
      <Content />
    </div>
  );
}

export default Mypage;
