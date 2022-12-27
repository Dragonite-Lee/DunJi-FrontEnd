import Filter from 'client/map/filter';
import { wrapper } from 'store';

function MapFilterPage() {
  return <Filter />;
}

export const getServerSideProps = wrapper.getServerSideProps(() => async () => {
  return {
    props: {},
  };
});

export default MapFilterPage;
