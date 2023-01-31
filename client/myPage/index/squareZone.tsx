import SquareZoneItem from 'client/myPage/index/SquareZoneItem';

const DUMMY_PATH = '/myPage/#';
const LIKE_PATH = '/myPage/like';
const RECENT_PATH = '/myPage/recent';

function SquareZone() {
  return (
    <div className="px-[18px] py-[20px]">
      <div className="grid grid-cols-2 gap-[9px]">
        <SquareZoneItem
          image={require('assets/icon/myPage/찜한매물.svg')}
          content="찜한매물"
          path={LIKE_PATH}
        />
        <SquareZoneItem
          image={require('assets/icon/myPage/최근매물.svg')}
          content="최근 본 매물"
          path={RECENT_PATH}
        />
        <SquareZoneItem
          image={require('assets/icon/myPage/매물.svg')}
          content="매물 활동"
          path={DUMMY_PATH}
        />
        <SquareZoneItem
          image={require('assets/icon/myPage/커뮤니티.svg')}
          content="커뮤니티 활동"
          path={DUMMY_PATH}
        />
      </div>
    </div>
  );
}

export default SquareZone;
