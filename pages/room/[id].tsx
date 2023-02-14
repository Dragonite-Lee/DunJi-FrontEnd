import { useRouter } from 'next/router';
import RoomDetail from 'client/room/detail';

function RoomDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  return <RoomDetail roomId={id}/>;
}

export default RoomDetailPage;

export async function getServerSideProps() {
  
  return {
    props: {},
  };
}
