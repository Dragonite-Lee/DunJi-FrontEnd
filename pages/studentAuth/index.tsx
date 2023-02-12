import StudentAuth from 'client/studentAuth';

function StudentAuthPage() {
  return <StudentAuth />;
}

export async function getServerSideProps() {
  return { props: {} };
}

export default StudentAuthPage;
