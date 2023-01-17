import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import NoDuplicateSelectBtn from 'hooks/reviewRegisterNoDuplicateSelectBtn';
import useNoDuplicateSelect from 'hooks/useNoDuplicateSelect';
import { dispatchAccessible } from 'store/modules/reviewRegister';
import { RootState } from 'types';

function Accessible() {
  const { accessible } = useSelector(
    (state: RootState) => state.reviewRegister,
  );

  const typeArr = useMemo(() => ['만족', '보통', '불만족'], []);
  const [selectArr, checkHandler] = useNoDuplicateSelect(
    typeArr,
    dispatchAccessible,
    accessible,
  );

  return (
    <div className="mt-[8px] flex text-[15px] Pretendard-Regular items-center justify-between">
      <div className="w-1/4">위치</div>
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

export default Accessible;
