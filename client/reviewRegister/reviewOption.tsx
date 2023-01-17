import useNoDuplicateSelect from 'hooks/useNoDuplicateSelect';
import NoDuplicateSelectBtn from 'hooks/reviewRegisterNoDuplicateSelectBtn';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

interface reviewOptionProps {
    satisfactionArr: Array<string>;
    dispatchType: ActionCreatorWithPayload<any, string>;
    stateType: string;
    content: string;
}

function ReviewOption({
  satisfactionArr,
  dispatchType,
  stateType,
  content
}: reviewOptionProps) {
  const [selectArr, checkHandler] = useNoDuplicateSelect(
    satisfactionArr,
    dispatchType,
    stateType,
  );
  
  return (
    <div className="mt-[8px] flex text-[15px] Pretendard-Regular items-center justify-between">
      <div className="w-1/4">{content}</div>
      <div className="grid grid-cols-3 w-3/4">
        {satisfactionArr.map((item, index) => (
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

export default ReviewOption;

