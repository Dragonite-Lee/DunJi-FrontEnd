import useRoomRegisterRedux from 'hooks/useRoomRegisterRedux';
import { componentHandle } from 'store/modules/roomRegister';

export default function SubHeader() {
  const [state, dispatch] = useRoomRegisterRedux();

  const onClickHandler = (num: number) => {
    dispatch(componentHandle(num));
  };
  const btnArr = ['주소 등록', '기본 정보', '추가 정보', '사진 등록'];
  return (
    <div className="sm:w-[375px] sm:m-auto text-font_gray flex w-full justify-between px-[18px] bg-component_white items-center border-b border-border_color">
      {btnArr.map((title, index) => (
        <button
          className={`py-4  text-[14px] Pretendard-Regular  h-max ${
            state.COMPONENT_HANDLER === index &&
            'text-main border-b-2 border-main'
          }`}
          onClick={() => onClickHandler(index)}
          key={index}
        >
          {title}
        </button>
      ))}
    </div>
  );
}
