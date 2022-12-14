import Map from 'client/map';
import { wrapper } from 'store';

function MapPage() {
  return <Map />;
}

export const getStaticProps = wrapper.getStaticProps(() => async () => {
  return {
    props: {},
  };
});

export default MapPage;
