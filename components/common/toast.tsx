import { useEffect } from 'react';

interface ToastProps {
  content: string;
  handleClose: () => void;
}
function Toast({ content, handleClose }: ToastProps) {
  const innerContent = content
    .split('\n')
    .map((text) => <p key={text}>{text}</p>);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose(); // 2초 뒤, toastState가 false가 되면서 알림창이 사라진다
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`${'animate-toast-animation'}	 transition-all bg-[#3F3C3A] opacity-80 text-[14px] fixed bottom-16 text-center text-white p-4 w-[340px] m-auto right-0 left-0`}
    >
      {innerContent}
    </div>
  );
}
export default Toast;
