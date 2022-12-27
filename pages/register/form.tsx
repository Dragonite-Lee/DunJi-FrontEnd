<<<<<<< HEAD
=======
 
>>>>>>> 8ac79486c0fedf3a4ea2f69b3e556116675a0e4e
import PolicyForm from 'client/register/form';

function PolicyFormPage() {
  return <PolicyForm />;
}

export async function getServerSideProps() {
  // TODO : server side 적용
  return { props: {} };
}

export default PolicyFormPage;
