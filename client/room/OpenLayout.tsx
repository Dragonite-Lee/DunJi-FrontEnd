import { Dispatch, ReactNode, SetStateAction } from 'react';
import Image from 'next/image';

interface OpenLayoutProps {
  children: ReactNode;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
}

function OpenLayout({ children, open, setOpen, title }: OpenLayoutProps) {
  const openHandler = () => setOpen(!open);

  return (
    <div className="w-full rounded-standard_rounded bg-component_white my-4">
      <div
        onClick={openHandler}
        className={`${
          open && `border-b border-border_color`
        } h-20 text-[17px] Pretendard-SemiBold  flex items-center px-[18px]`}
      >
        {title}
        <div className={`ml-auto w-10 h-12 relative ${open && 'rotate-180'}`}>
          <Image
            src={require('assets/icon/화살표_펼치기.svg')}
            alt="arrow"
            objectFit="contain"
            layout="fill"
            className="rotate-180"
          />
        </div>
      </div>
      <div className="px-[18px] ">{open && children}</div>
    </div>
  );
}

export default OpenLayout;
