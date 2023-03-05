import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent } from 'react';
import CategoryHeader from 'components/common/CategoryHeader';
import { dispatchContent } from 'store/modules/roomRegister';
import { RootState } from 'types';

function Parking() {
  const dispatch = useDispatch();

  const { content } = useSelector((state: RootState) => state.roomRegister);

  const getContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(dispatchContent(e.target.value))
  };

  return (
    <>
      <CategoryHeader title="상세설명" />
      <textarea
        value={content}
        onChange={(e) => getContent(e)}
        className="border border-border_color rounded-standard_rounded w-full h-[220px] p-4 text-xl Pretendard-Regular outline-0"
      ></textarea>
    </>
  );
}

export default Parking;
