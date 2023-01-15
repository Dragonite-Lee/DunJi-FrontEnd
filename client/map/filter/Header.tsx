import router from 'next/router';
import CancelHeader from 'components/layout/Header/CancelHeader';

function Header() {
  const handleBack = () => {
    router.push('/map');
  };

  return (
    <CancelHeader title="필터" backAction={handleBack} onCancel={handleBack} />
  );
}

export default Header;
