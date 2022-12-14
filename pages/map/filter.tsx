import Filter from 'client/map/filter';
import { wrapper } from 'store';

function MapFilterPage() {
  return <Filter />;
}

export const getStaticProps = wrapper.getStaticProps(() => async () => {
  return {
    props: {},
  };
});

export default MapFilterPage;
