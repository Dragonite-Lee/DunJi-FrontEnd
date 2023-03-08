import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContractType() {
  return (
    <div className="min-w-[375px] sm:w-[375px] h-full sm:h-screen bg-background_beige pt-[20px]">
      <Link href="/room/contract/sublease">
        <div className='Pretendard-SemiBold py-8 px-[18px] my-4 mx-[18px] bg-white rounded-standard_rounded h-room_register_btn_height1 text-[17px] flex justify-between items-center'>
          <div>
            전대차 계약일 경우
            <span className="Pretendard-Regular">(단기임대 포함)</span>
          </div>
          <a>
            <FontAwesomeIcon icon="chevron-right" />
          </a>
        </div>  
      </Link>
      <Link href="/room/contract/transfer-agreement">
        <div className='Pretendard-SemiBold py-8 px-[18px] my-4 mx-[18px] bg-white rounded-standard_rounded h-room_register_btn_height1 text-[17px] flex justify-between items-center'>
          <div>양도양수 계약일 경우</div>
          <a>
            <FontAwesomeIcon icon="chevron-right" />
          </a>
        </div>
      </Link>
      <Link href="/room/contract/download">
        <div className='Pretendard-SemiBold py-8 px-[18px] my-4 mx-[18px] bg-white rounded-standard_rounded h-room_register_btn_height1 text-[17px] flex justify-between items-center'>
          <div>파일 다운로드</div>
          <a>
            <FontAwesomeIcon icon="chevron-right" />
          </a>
        </div>
      </Link>
      <span className="text-red text-center mt-mt_106 block text-xl">
        TIP! 해당 매물의 후기를 둥지에서 확인해보세요
      </span>
    </div>
  );
}

export default ContractType;
