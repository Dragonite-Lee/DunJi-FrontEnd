import Map from 'client/map';
import { wrapper } from 'store';

function MapPage() {
  return <Map />;
}

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return {
    props: {},
  };
});

export default MapPage;
