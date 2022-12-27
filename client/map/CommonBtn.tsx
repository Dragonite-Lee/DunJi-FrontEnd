import { Dispatch } from 'react';

import type { SetStateAction } from 'react';

type propsType = {
  value: string;
  check: boolean;
  checkHandler: Dispatch<SetStateAction<boolean>>;
};

function CommonBtn({ value, check, checkHandler }: propsType) {
  return (
    <button
      // eslint-disable-next-line prettier/prettier
      className={`focus-bg-black text-font_gray rounded-lg h-full  px-3  text-[1rem]  border border-border_color ${check ? 'bg-font_gray  text-component_white' : 'border border-font_gray'} `}
      onClick={() => {
        checkHandler(!check);
      }}
    >
      {value}
    </button>
  );
}

export default CommonBtn;
