import Info from 'client/myPage/info';
import Layout from 'client/myPage/layout';

function InfoPage() {
  return (
    <Layout title="개인정보">
      <Info
        nickname={'둥지'}
        email={'emdwl@gmai.com'}
        phone={'010-0000-0000'}
        school={'한양대 에리카'}
      />
    </Layout>
  );
}

export async function getServerSideProps() {
  //TODO: 이메일등 개인정보에 예상
  return { props: {} };
}

export default InfoPage;
