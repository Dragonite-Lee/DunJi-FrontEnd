import DownloadType from 'components/contract/download/DownloadType';
import Header from 'components/contract/download/Header';

export default function Download() {
  return (
    <div className="bg-background_beige sm:w-[375px] sm:m-auto">
      <Header />
      <DownloadType />
    </div>
  );
}
