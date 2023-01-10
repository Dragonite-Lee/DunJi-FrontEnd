import { ContentItemType } from 'client/myPage/ContentItem';
import ContentList from 'client/myPage/ContentList';

const DUMMY_PATH = '/#';

function Content() {
  function loggedOut() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('userId');
      localStorage.removeItem('userNickname');
    }
    location.reload();
  }

  const GUIDE_LIST: ContentItemType[] = [
    {
      content: '공지사항',
      path: DUMMY_PATH,
    },
    {
      content: '계약서 가이드',
      path: '/room/contract',
    },
    {
      content: '둥지 서비스',
      path: DUMMY_PATH,
    },
    {
      content: '매물번호 조회',
      path: DUMMY_PATH,
    },
  ];

  const ECT_LIST: ContentItemType[] = [
    {
      content: '서비스 이용 약관',
      path: DUMMY_PATH,
    },
    {
      content: '회원 탈퇴',
      path: DUMMY_PATH,
    },
    {
      content: '로그아웃',
      path: '/',
      onAction: loggedOut,
    },
  ];

  return (
    <div className="mx-[18px] bg-white rounded-standard_rounded">
      <div className="px-[22px]">
        <ContentList title="둥지 안내" itemList={GUIDE_LIST} />
        <ContentList title="기타" itemList={ECT_LIST} />
      </div>
    </div>
  );
}

export default Content;
