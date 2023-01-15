import DownloadType from 'client/room/contract/download/DownloadType';
import Header from 'client/room/contract/Header';

function Download() {
  return (
    <div className="bg-background_beige sm:w-[375px] sm:m-auto">
      <Header title="파일다운로드" />
      <DownloadType />
    </div>
  );
}

export default Download;
