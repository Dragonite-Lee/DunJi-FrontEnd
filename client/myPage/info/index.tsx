import Image from 'next/image';
import { useRouter } from 'next/router';
import InfoItem from 'client/myPage/info/InfoItem';

interface InfoProps {
  nickname: string;
  email: string;
  phone: string;
  school: string;
}
function Info({ nickname, email, phone, school }: InfoProps) {
  const router = useRouter();

  const handleNickNameEdit = () => {
    router.push('info/edit');
  };
  return (
    <div className="p-[18px]">
      <div className="m-auto text-center relative w-fit p-2">
        {/* *카톡으로받은 프로필사진 */}
        <Image
          src={require('assets/icon/logo/logo_main.png')}
          width={98}
          height={98}
          alt="프로필 이미지"
          className="rounded-[50px]"
        />
        <div className="absolute bottom-2 right-1 bg-white rounded-[50px] border-[#E3E2E0] w-[30px] h-[30px]">
          <Image
            src={require('assets/icon/채팅메뉴_앨범.svg')}
            width={20}
            height={28}
            alt="카메라"
            className="rounded-[50px]"
          />
        </div>
      </div>
      <div className="w-full bg-white rounded-[10px] overflow-hidden">
        <InfoItem
          title={'닉네임'}
          content={nickname}
          onEdit={() => {
            handleNickNameEdit();
          }}
        />
        <hr className="m-auto w-11/12" />
        <InfoItem title={'이메일'} content={email} />
        <hr className="m-auto w-11/12" />
        <InfoItem title={'휴대전화'} content={phone} />
        <hr className="m-auto w-11/12" />
        <InfoItem
          title={'대학교 인증'}
          content={school}
          onEdit={() => {
            console.log('edit');
          }}
        />
      </div>
    </div>
  );
}

export default Info;
