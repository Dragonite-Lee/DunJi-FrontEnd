import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import NoDuplicateSelectBtn from 'hooks/reviewRegisterNoDuplicateSelectBtn';
import useNoDuplicateSelect from 'hooks/useNoDuplicateSelect';
import { dispatchFacility } from 'store/modules/reviewRegister';
import { RootState } from 'types';

function Facility() {
  const { facility } = useSelector((state: RootState) => state.reviewRegister);

  const useTypeArr = useMemo(() => ['만족', '보통', '불만족'], []);

  const [selectArr, checkHandler] = useNoDuplicateSelect(
    useTypeArr,
    dispatchFacility,
    facility,
  );

  return (
    <div className="mt-[8px] pb-[30px] flex text-[15px] Pretendard-Regular items-center justify-between border-b border-border_color">
      <div className="w-1/4">시설 만족도</div>
      <div className="grid grid-cols-3 w-3/4">
        {useTypeArr.map((item, index) => (
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

export default Facility;
