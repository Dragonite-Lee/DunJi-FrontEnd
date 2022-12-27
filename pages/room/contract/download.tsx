<<<<<<< HEAD
import DownloadType from 'components/contract/download/DownloadType';
import Header from 'components/contract/download/Header';
=======
import Download from 'client/pages/room/contract/download';
>>>>>>> 8ac79486c0fedf3a4ea2f69b3e556116675a0e4e

function DownloadPage() {
  return <Download />;
}

export default DownloadPage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
