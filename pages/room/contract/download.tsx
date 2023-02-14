import Download from "client/room/contract/download";

function DownloadPage() {
  return <Download />
}

export default DownloadPage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
