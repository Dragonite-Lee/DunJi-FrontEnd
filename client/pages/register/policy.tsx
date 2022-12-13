import Link from 'next/link';
import PolicyItem from 'client/pages/register/policy-item';
import useChecks from 'hooks/useChecks';

function Policy({}) {
  const { checks, checkAll, handleCheck, handleAllCheck } = useChecks(4);

  const POLICY_LIST = [
    '[필수] 만 14세 이상입니다.',
    '[필수] 둥지 서비스 이용약관 동의',
    '[필수] 개인정보 수집 및 이용 동의',
    '[선택] 마케팅 정보 수신에 대한 동의',
  ];

  return (
    <div className="flex min-w-20  items-center flex-col my-40 mx-auto w-main_width font-sans">
      <h1 className="w-full text-3xl font-bold border-b border-yellow p-4">
        회원가입
      </h1>
      <h2 className="text-lg py-8 mr-auto font-bold">
        어서오세요! 둥지 서비스 이용약관에 동의해주세요.
      </h2>
      <form className="flex w-full flex-col ">
        <div className="border-b border-yellow mb-8 w-full flex">
          <input type="checkbox" id="checkAll" className="hidden" />
          <label
            htmlFor="checkAll"
            className={`inline-block before:content-[''] w-7 h-7 border border-blur mr-2  algin-middle font-NotoSansKR font-  rounded-md text-center ${
              checkAll ? "before:content-['✔️'] text-white " : ''
            }`}
            onClick={handleAllCheck}
          ></label>
          <span className="ml-2  text-blur text-xl font-normal mb-4">
            모두 동의
          </span>
        </div>

        {POLICY_LIST.map((content, idx) => (
          <PolicyItem
            id={idx}
            content={content}
            isCheck={checks[idx]}
            handleCheck={() => handleCheck(idx)}
          />
        ))}

        <div className="w-full text-blur my-6">
          <p>만 14세 이상 회원 가입이 가능합니다.</p>
          <p>
            해당 내용은
            <span className="">이용약관 및 정책</span>
            에서도 확인 가능합니다.
          </p>
        </div>
        <Link href="/register/form">
          <a className="w-full bg-yellow h-16 text-lg flex justify-center items-center">
            동의하고 진행하기
          </a>
        </Link>
      </form>
    </div>
  );
}

export default Policy;
