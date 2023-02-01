import { ReactNode, useRef } from 'react';
import useOnClickOutside from 'hooks/useOnClickOutside';

interface AlertProps {
  content: ReactNode;
  onClose: () => void;
}

function Alert({ content, onClose }: AlertProps) {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, onClose);

  return (
    <div className="fixed flex justify-center items-center top-0  left-0  w-screen	text-center h-screen bg-[rgba(0,0,0,0.2)] z-10">
      <div
        className="w-fit bg-white p-[20px] rounded-lg text-[15px] "
        ref={ref}
      >
        {content}
      </div>
    </div>
  );
}

export default Alert;
