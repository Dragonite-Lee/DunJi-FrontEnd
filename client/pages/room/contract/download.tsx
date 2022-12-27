import DownloadType from 'client/room/contract/download/DownloadType';
import Header from 'client/room/contract/download/Header';

function Download() {
  return (
    <div className="bg-background_beige sm:w-[375px] sm:m-auto">
      <Header />
      <DownloadType />
    </div>
  );
}

export default Download;
