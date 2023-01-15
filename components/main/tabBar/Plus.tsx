import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';

import {
  dispatchTabBarOpenPlus,
  dispatchTabBarOpenPostModal,
} from 'store/modules/tab';
import { RootState } from 'types';

export default function Plus() {
  const dispatch = useDispatch();

  const { TABBAR_OPEN_PLUS, TABBAR_OPEN_POSTMODAL } = useSelector(
    (state: RootState) => state.tab,
  );

  return (
    <div>
      {TABBAR_OPEN_PLUS ? (
        <Image
          width={30}
          height={30}
          alt="검색로고"
          src={require('assets/icon/main/tabBar/메뉴바_글올리기_활성화.svg')}
        />
      ) : (
        <Image
          onClick={() => {
            dispatch(dispatchTabBarOpenPlus(!TABBAR_OPEN_PLUS));
            dispatch(dispatchTabBarOpenPostModal(!TABBAR_OPEN_POSTMODAL));
          }}
          width={30}
          height={30}
          alt="플러스로고"
          src={require('assets/icon/main/tabBar/메뉴바_글올리기_비활성화.svg')}
        />
      )}
    </div>
  );
}
