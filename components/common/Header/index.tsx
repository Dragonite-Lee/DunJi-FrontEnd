import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface HeaderProps {
  title: string;
  onClick?: () => void;
}

function Header({ title, onClick }: HeaderProps) {
  return (
    <header
      className="flex w-screen justify-between px-[18px]
py-4  h-24 items-center text-xl  border-b sm:w-[375px] sm:m-auto "
    >
      <div className="flex text-2xl items-center">
        <div onClick={onClick}>
          <FontAwesomeIcon icon="chevron-left" />
        </div>
        <div className="ml-4 Pretendard-SemiBold text-[17px]">{title}</div>
      </div>
    </header>
  );
}
export default Header;
