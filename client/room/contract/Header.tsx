import router from 'next/router';
import MoreHeader from 'components/layout/Header/MoreHeader';

interface HeaderProps {
  title: string;
}
function Header({ title }: HeaderProps) {
  const handleBackBtnClick = () => {
    router.push('/room/contract');
  };

  return <MoreHeader title={title} backAction={handleBackBtnClick} />;
}

export default Header;
