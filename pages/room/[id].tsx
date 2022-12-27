import RoomDetail from 'client/pages/room/[id]';

function RoomDetailPage() {
  return <RoomDetail />;
}

export default RoomDetailPage;

export async function getServerSideProps() {
  return {
    props: {},
  };
}
