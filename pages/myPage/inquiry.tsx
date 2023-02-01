import Inquiry from 'client/myPage/index/Inquiry';
import Layout from 'client/myPage/layout';

function InquiryPage() {
  return (
    <Layout title="매물번호조회">
      <Inquiry />
    </Layout>
  );
}

export async function getServerSideProps() {
  //TODO: 이메일등 개인정보에 예상
  return { props: {} };
}

export default InquiryPage;
