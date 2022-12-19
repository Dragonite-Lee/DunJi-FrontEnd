import Image from 'next/image';
import Link from 'next/link';
import NewReview from 'client/main/newReview';
import NewRoom from 'client/main/newRoom';
import Carousel from 'components/main/Carousel';
import TabBar from 'components/main/TabBar';

function Home() {
  let userID;
  let userNickname;
  if (typeof window !== 'undefined') {
    userID = localStorage.getItem('userId');
    userNickname = localStorage.getItem('userNickname');
  }

  const searchClickHandler = () => {
    sessionStorage.clear();
    sessionStorage.setItem('search', 'true');
  };

  return (
    <div className="bg-background_beige h-screen sm:w-[375px] sm:m-auto">
      <TabBar />
      <div className="pb-12 w-full">
        {/* *학교필터 */}
        <div className="flex items-center border-b-2 border-border_color text-3xl justify-between py-8 px-[18px]">
          <div className="flex items-center justify-between">
            <div className="px-4 Pretendard-Regular">한양대 ERICA</div>
            {userID ? (
              <div className="text-xl">{userNickname}님 안녕</div>
            ) : (
              <div className="text-xl">로그인하셈</div>
            )}
          </div>
          <div className="flex Pretendard-Regular items-center justify-between">
            <Link href="/login">
              <a>
                <div className="text-xl">간편로그인</div>
              </a>
            </Link>
            <Image src={require('assets/icon/더보기.svg')} alt="더보기" />
          </div>
        </div>
        {/* *로고와 메인글 */}
        <header className="flex items-center text-4xl justify-between pt-8 pb-3 mx-[18px] relative">
          <div>
            <div className="sm:relative flex items-end justify-between">
              <div className="w-[215px]">
                <Image
                  width={215}
                  height={157}
                  alt="메인캐릭터"
                  src={require('assets/icon/main/main_char.png')}
                />
              </div>
              <div className="absolute sm:left-[190px] sm:top-[85px] right-[35px] top-[110px] text-[23px] w-[140px] mb-5 Pretendard-SemiBold">
                어떤 방을
                <br />
                찾고 계신가요?
              </div>
            </div>
          </div>
        </header>

        {/* *지역검색  */}
        <div className="relative h-20 mx-[18px]">
          <div className="absolute  left-6 bottom-[0] flex items-center h-full">
            <Image
              alt="돋보기"
              width={22}
              height={22}
              src={require('assets/icon/main/메뉴바_검색_활성화.svg')}
            />
          </div>
          <Link href="/map">
            <a>
              <input
                type="text"
                className="bg-white rounded-[8rem] h-full text-xl pl-20 placeholder-font_border_color outline-0 w-full"
                placeholder="지역, 지하철, 대학교 검색"
                onClick={searchClickHandler}
              ></input>
            </a>
          </Link>
        </div>

        {/* *메인이벤트 슬라이더박스 */}
        <div>
          <Carousel />
        </div>
      </div>

      <div className="pt-[35px] px-[18px] bg-component_white">
        {/* *하나부터 열까지 둥지와 함께 서비스 */}
        <div>
          <div className="text-[16px] Pretendard-SemiBold">
            하나부터 열까지 둥지와 함께!
          </div>
          <div className="mt-[16px] grid grid-cols-2 gap-[8px]">
            <div className="px-[19px] py-[27px] h-[80px] flex items-center sm:justify-between justify-center Pretendard-SemiBold text-[17px] rounded-standard_rounded bg-white">
              <Image
                alt="트럭"
                src={require('assets/icon/main/service/서비스_이삿짐.svg')}
              />
              <div>둥지 서비스</div>
            </div>
            <div className="pl-[27px] pr-[31px] h-[80px] py-[27px] flex items-center sm:justify-between justify-center Pretendard-SemiBold text-[17px] rounded-standard_rounded bg-white">
              <Image
                alt="트럭"
                src={require('assets/icon/main/service/메인_공지사항.svg')}
              />
              <div>공지사항</div>
            </div>
            <Link href="/room/contract">
              <a>
                <div className="pl-[15px] pr-[15px] h-[80px] py-[27px] flex items-center sm:justify-between justify-center Pretendard-SemiBold text-[17px] rounded-standard_rounded bg-white">
                  <Image
                    alt="트럭"
                    src={require('assets/icon/main/service/계약서가이드.svg')}
                  />
                  <div>계약서 가이드</div>
                </div>
              </a>
            </Link>
            <div className="px-[28px] py-[27px] h-[80px] flex items-center sm:justify-between justify-center Pretendard-SemiBold text-[17px] rounded-standard_rounded bg-white">
              <Image
                alt="트럭"
                src={require('assets/icon/main/service/마이_커뮤니티 활동.svg')}
              />
              <div>커뮤니티</div>
            </div>
          </div>
        </div>

        {/* *새로 들어온 둥지 */}
        <NewRoom />
        {/* *둥지를 떠나며 */}
        <NewReview />
      </div>
      {/* *로고와 사업자명 등등 푸터 */}
      <footer className="min-w-[375px] bg-component_white flex items-center justify-between pt-36 pb-40 px-[18px] w-full">
        <div className="sm:w-[10rem] w-2/5">
          <Image
            width={90}
            height={40}
            alt="둥지로고"
            src={require('assets/icon/main/logo_gray.png')}
          />
        </div>
        <div className="sm:w-[260px] pl-[36px] w-full text-font_gray  sm:text-[9px] leading-4 Pretendard-Regular">
          상호 : 네스트소프트 | 대표 : 정재현 <br className="hidden sm:block" />
          <span className="inline sm:hidden">|</span> 사업자등록번호 :
          317-06-02039
          <br />
          서비스 이용문의 : 010-9210-2745 <br className="hidden sm:block" />
          <span className="inline sm:hidden">|</span> 이메일
          jjangjjh2222@naver.com
          <br />
          주소 : 한양대학교 ERICA 제5공학관 SW창업1실
          <br />
          통신 판매업 신고번호 : 제2022-대전중구-0621호
          <br />
        </div>
      </footer>
    </div>
  );
}

export default Home;
