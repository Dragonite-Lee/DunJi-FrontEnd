import { Dispatch, SetStateAction } from 'react';

type propsType = {
  value: string;
  check: boolean;
  checkHandler: Dispatch<SetStateAction<boolean>>;
};

export default function CommonBtn({ value, check, checkHandler }: propsType) {
  return (
    <button
      className={`focus-bg-black text-font_gray rounded-lg h-full  px-3  text-[1rem]  border border-border_color ${
        check ? 'bg-font_gray  text-component_white' : 'border border-font_gray'
      } `}
      onClick={() => {
        checkHandler(!check);
      }}
    >
      {value}
    </button>
  );
}
