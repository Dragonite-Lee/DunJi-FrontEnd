import { useMemo } from 'react';
import useNoDuplicateSelect from 'hooks/useNoDuplicateSelect';
import useReviewRegisterReudx from 'hooks/useReviewRegisterRedux';
import { dispatchClean } from 'store/modules/reviewRegister';
import NoDuplicateSelectBtn from 'hooks/reviewRegisterNoDuplicateSelectBtn';

function Clean() {
  const typeArr = useMemo(() => ['만족', '보통', '불만족'], []);
  const [state, dispatch] = useReviewRegisterReudx();
  const [selectArr, checkHandler] = useNoDuplicateSelect(
    typeArr,
    dispatchClean,
    state.clean,
  );

  return (
    <div className="mt-[45px] flex text-[15px] Pretendard-Regular items-center justify-between">
      <div className="w-1/4">청결도</div>
      <div className="grid grid-cols-3 w-3/4">
        {typeArr.map((item, index) => (
          <NoDuplicateSelectBtn
            key={index}
            value={item}
            check={selectArr[index]}
            index={index}
            checkHandler={checkHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default Clean;