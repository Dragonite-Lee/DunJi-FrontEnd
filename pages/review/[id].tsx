import { useRouter } from 'next/router';
import ReviewDetail from 'client/review/detail';

function ReviewDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  return <ReviewDetail buildingId={id}/>;
}

export default ReviewDetailPage;

export async function getServerSideProps() {
  
  return {
    props: {},
  };
}
