import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';

import BottomMainBtn from 'components/bottom_main_btn';
import Header from 'components/layout/Header';
import {
  changeWholePolicy,
  setPolicyAge,
  setPolicyCollectionAndUsage,
  setPolicyMarketing,
  setPolicyOfferings,
  setPolicyService,
  setWholePolicy,
} from 'store/modules/signup';
import { RootState } from 'types';

type PolicyName =
  | 'age'
  | 'service'
  | 'collectionAndUsage'
  | 'offerings'
  | 'marketing';

function PolicyReg() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    wholePolicy,
    policyAge,
    policyService,
    policyCollectionAndUsage,
    policyOfferings,
    policyMarketing,
  } = useSelector((state: RootState) => state.signup);

  // 다음 단계로 넘어가기 위한 조건 확인 (필수 동의 정책 확인)
  const [canNextStage, setCanNextStage] = useState(
    policyAge && policyService && policyCollectionAndUsage && policyOfferings,
  );

  /** 전체 정책 동의 상태 변경 */
  const wholeCheckboxHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(changeWholePolicy(event.target.checked));
    },
    [dispatch],
  );

  /** 개별 정책 동의 상태 변경 */
  const checkboxHandler = useCallback(
    (name: PolicyName, event: React.ChangeEvent<HTMLInputElement>) => {
      if (name === 'age') {
        dispatch(setPolicyAge(event.target.checked));
      } else if (name === 'service') {
        dispatch(setPolicyService(event.target.checked));
      } else if (name === 'collectionAndUsage') {
        dispatch(setPolicyCollectionAndUsage(event.target.checked));
      } else if (name === 'offerings') {
        dispatch(setPolicyOfferings(event.target.checked));
      } else if (name === 'marketing') {
        dispatch(setPolicyMarketing(event.target.checked));
      }
    },
    [dispatch],
  );

  /** 약관 상세정보 확인 버튼 */
  const openPolicyDetailsPage = useCallback(
    (url: string) => () => {
      router.push(url);
    },
    [router],
  );

  /** 시작하기 버튼 */
  const bottomMainBtnHandler = useCallback(() => {
    router.push('/signup/location');
  }, [router]);

  // 개별 정책 동의 상태를 전체 정책 동의 상태에 반영
  useEffect(() => {
    if (
      policyAge &&
      policyService &&
      policyCollectionAndUsage &&
      policyOfferings &&
      policyMarketing
    ) {
      dispatch(setWholePolicy(true));
    } else {
      dispatch(setWholePolicy(false));
    }
  }, [
    dispatch,
    policyAge,
    policyCollectionAndUsage,
    policyMarketing,
    policyOfferings,
    policyService,
  ]);

  // 시작하기 버튼 활성화
  useEffect(() => {
    setCanNextStage(
      policyAge && policyService && policyCollectionAndUsage && policyOfferings,
    );
  }, [policyAge, policyCollectionAndUsage, policyOfferings, policyService]);

  // TODO: 체크박스 디자인 수정, 약관 상세정보 확인 url 수정, 헤더(뒤로가기 버튼) 추가
  return (
    <div className="h-screen bg-background_beige sm:w-[375px] sm:m-auto">
      <div className="h-[100%] flex flex-col">
        {/* <Header /> */}
        <div className="flex flex-col flex-auto text-center justify-center space-y-[6px]">
          <div className="Pretendard-SemiBold text-[28px]">환영합니다!</div>
          <div className="Pretendard-SemiBold text-[16px]">
            원활한 서비스 이용을 위해 동의해주세요.
          </div>
        </div>
        <div className="flex flex-col px-[18px] text-[16px]">
          <label className="flex items-center justify-center h-[50px] text-center bg-[#3F3C3A] rounded-[10px] text-[#FFFFFF] Pretendard-SemiBold">
            <input
              type="checkbox"
              className="relative top-[1px] mr-[6px]"
              checked={wholePolicy}
              onChange={wholeCheckboxHandler}
            />
            전체 약관 동의
          </label>
          <div className="px-[18px] space-y-[18px] mt-[20px] mb-[40px] Pretendard-Regular">
            <div>
              <label>
                <input
                  type="checkbox"
                  className="relative top-[1px] mr-[6px]"
                  checked={policyAge}
                  onChange={(event) => checkboxHandler('age', event)}
                />
                {`만 14세 이상 (필수)`}
              </label>
            </div>
            <div className="flex justify-between">
              <label>
                <input
                  type="checkbox"
                  className="relative top-[1px] mr-[6px]"
                  checked={policyService}
                  onChange={(event) => checkboxHandler('service', event)}
                />
                {`둥지 서비스 이용약관 동의 (필수)`}
              </label>
              <button
                className="text-[12px]"
                onClick={openPolicyDetailsPage('/')}
              >
                <FontAwesomeIcon icon="chevron-right" />
              </button>
            </div>
            <div className="flex justify-between">
              <label>
                <input
                  type="checkbox"
                  className="relative top-[1px] mr-[6px]"
                  checked={policyCollectionAndUsage}
                  onChange={(event) =>
                    checkboxHandler('collectionAndUsage', event)
                  }
                />
                {`개인정보 수집 및 이용 동의 (필수)`}
              </label>
              <button
                className="text-[12px]"
                onClick={openPolicyDetailsPage('/')}
              >
                <FontAwesomeIcon icon="chevron-right" />
              </button>
            </div>
            <div className="flex justify-between">
              <label>
                <input
                  type="checkbox"
                  className="relative top-[1px] mr-[6px]"
                  checked={policyOfferings}
                  onChange={(event) => checkboxHandler('offerings', event)}
                />
                {`개인정보 제 3자 제공 동의 (필수)`}
              </label>
              <button
                className="text-[12px]"
                onClick={openPolicyDetailsPage('/')}
              >
                <FontAwesomeIcon icon="chevron-right" />
              </button>
            </div>
            <div className="flex justify-between">
              <label>
                <input
                  type="checkbox"
                  className="relative top-[1px] mr-[6px]"
                  checked={policyMarketing}
                  onChange={(event) => checkboxHandler('marketing', event)}
                />
                {`마케팅 정보 수신 동의 (선택)`}
              </label>
              <button
                className="text-[12px]"
                onClick={openPolicyDetailsPage('/')}
              >
                <FontAwesomeIcon icon="chevron-right" />
              </button>
            </div>
          </div>
        </div>
        <BottomMainBtn
          value="시작하기"
          status={canNextStage}
          btnHandler={bottomMainBtnHandler}
        />
      </div>
    </div>
  );
}

export default PolicyReg;
