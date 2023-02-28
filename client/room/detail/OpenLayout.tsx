import { ReactNode } from 'react';
import Image from 'next/image';

interface OpenLayoutProps {
  children: ReactNode;
  open: boolean;
  handlerOpen: () => void;
  title: string;
}

function OpenLayout({ children, open, handlerOpen, title }: OpenLayoutProps) {
  
  return (
    <div className="w-full rounded-standard_rounded bg-component_white my-4">
      <div
        onClick={handlerOpen}
        className={`${
          open && `border-b border-border_color`
        } h-16 text-[17px] Pretendard-SemiBold  flex items-center px-[18px]`}
      >
        {title}
        <div className={`ml-auto w-8 h-8 relative ${open && 'rotate-180'}`}>
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
