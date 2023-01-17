import { useDispatch, useSelector } from 'react-redux';

import CategoryHeader from 'components/common/CategoryHeader';
import { dispatchTitle } from 'store/modules/roomRegister';
import { RootState } from 'types';

function Title() {
  const dispatch = useDispatch();

  const { title } = useSelector((state: RootState) => state.roomRegister);

  return (
    <>
      <CategoryHeader title="방 제목" />
      <input
        className="h-[50px] w-full rounded-standard_rounded  text-[15px] pl-4 placeholder-font_gray outline-0 Pretendard-Regular "
        value={title}
        placeholder="방 특성이 드러나는 제목을 입력해주세요.(20자 이내)"
        onChange={(e) => dispatch(dispatchTitle(e.target.value))}
      />
    </>
  );
}

export default Title;
