import Header from 'components/layout/Header';
import useGoBack from 'hooks/useGoback';

interface CancelHeaderProps {
  title: string;
  backAction?: () => void;
  onCancel?: () => void;
}

function CancelHeader({ onCancel, ...props }: CancelHeaderProps) {
  const goBack = useGoBack();

  return (
    <Header
      {...props}
      rightElement={
        <div
          className="text-main text-[12px] Pretendard-Regular"
          onClick={onCancel ?? goBack}
        >
          취소
        </div>
      }
    />
  );
}
export default CancelHeader;
