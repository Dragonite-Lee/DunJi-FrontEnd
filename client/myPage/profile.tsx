import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Profile() {
  return (
    <div className="mx-[28px] py-[16px] flex items-center justify-between border-b">
      <div className="flex items-center">
        <div className="mr-[15px]">
          {/* *카톡으로받은 프로필사진 */}
          <Image
            src={require('assets/icon/logo/logo_main.png')}
            width={60}
            height={60}
            alt="메인로고"
            className="rounded-[50px]"
          />
        </div>
        <div>
          {/* *이름, 학교, 메일 */}
          <div className="flex items-center mb-[3px]">
            <div className="text-[17px] Pretendard-SemiBold pr-[5px] ">
              둥지인
            </div>
            <div className="text-[10px] text-font_gray mt-auto Pretendard-Regular border border-border_color rounded-[7px] px-[7px] py-[3px]">
              한양대에리카
            </div>
          </div>
          <div className="text-[12px] text-font_gray Pretendard-Regular">
            ross03719@hanyang.ac.kr
          </div>
        </div>
      </div>
      <div>
        <Link href="/#">
          {/* *정보수정페이지로 이동해야함 */}
          <a>
            <FontAwesomeIcon icon="chevron-right" className="text-[25px]" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Profile;
