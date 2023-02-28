import Image from 'next/image';

function DownloadType() {
  return (
    <div className="h-screen px-[18px] bg-background_beige">
      <a href="https://drive.google.com/file/d/1Ogmq88ZZAlJT_hzYbgTsTE_1E3XjMby9/view?usp=share_link" download="전대동의서.jpg" className='Pretendard-SemiBold py-10 px-[18px] mt-10 bg-white rounded-standard_rounded border-b-2 border-background_beige h-room_register_btn_height1 text-[16px] flex justify-between items-center'>
        <div>전대동의서.hwp</div>
        <Image
          src={require('assets/icon/contract/다운로드2.svg')}
          alt="다운로드"
        />
      </a>
      <a href="https://drive.google.com/file/d/1ybm7Fld-VxoZrAjaty3VQGgrOn8g2qI5/view?usp=share_link" download="전대동의서.jpg" target="_self" className='Pretendard-SemiBold py-10 px-[18px] bg-white rounded-standard_rounded border-b-2 mt-4 border-background_beige h-room_register_btn_height1 text-[16px] flex justify-between items-center'>
        <div>전대차 계약서.hwp</div>
        <Image
          src={require('assets/icon/contract/다운로드2.svg')}
          alt="다운로드"
        />
      </a>
      <a href="https://drive.google.com/file/d/1B14RJjhkU61ODaiLA9mCWe-wLtr9ag_6/view?usp=share_link" download="전대동의서.jpg" target="_self" className='Pretendard-SemiBold py-10 px-[18px] bg-white rounded-standard_rounded border-b-2 mt-4 border-background_beige h-room_register_btn_height1 text-[16px] flex justify-between items-center'>
        <div>임차권 양도 승낙서.hwp</div>
        <Image
          src={require('assets/icon/contract/다운로드2.svg')}
          alt="다운로드"
        />
      </a>
      <a href="https://drive.google.com/file/d/1cFmt07DCjPaA8ahd12kir8NYeDYDnQxh/view?usp=share_link" download="전대동의서.jpg" target="_self" className='Pretendard-SemiBold py-10 px-[18px] bg-white rounded-standard_rounded border-b-2 mt-4 border-background_beige h-room_register_btn_height1 text-[16px] flex justify-between items-center'>
        <div>
          양도 양수 계약서.hwp
          <span className="Pretendard-Regular text-[11px]">
            (부동산 권리 양도 계약서)
          </span>
        </div>
        <Image
          src={require('assets/icon/contract/다운로드2.svg')}
          alt="다운로드"
        />
      </a>
    </div>
  );
}

export default DownloadType;
