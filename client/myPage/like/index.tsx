import Card from 'client/myPage/like/Card';
import Header from 'components/layout/Header';

function Like() {
  return (
    <div className="bg-background_beige min-h-full sm:w-[375px] sm:m-auto pb-[120px]">
      <Header title="찜한매물" />

      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
export default Like;
