import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useGoBack from 'hooks/useGoback';

interface CancelHeaderProps {
  title: string;
  onBack?: () => void;
  onCancel?: () => void;
}

function CancelHeader({ title, onBack, onCancel }: CancelHeaderProps) {
  const goBack = useGoBack();

  return (
    <header
      className="flex w-screen justify-between px-[14px] 
                py-4  h-24 items-center text-xl  border-b sm:w-[375px] sm:m-auto"
    >
      <div className="flex text-2xl items-center">
        <div onClick={onBack ?? goBack}>
          <FontAwesomeIcon icon="chevron-left" />
        </div>
        <div className="ml-4 Pretendard-SemiBold text-[17px]">{title}</div>
      </div>
      <div
        className="text-main text-[12px] Pretendard-Regular"
        onClick={onCancel ?? goBack}
      >
        취소
      </div>
    </header>
  );
}
export default CancelHeader;
