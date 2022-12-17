import BottomNextBtn from 'client/map/filter/BottomNextBtn';
import ExtraFilter from 'client/map/filter/ExtraFilter';
import Floor from 'client/map/filter/Floor';
import Header from 'client/map/filter/Header';
import ManagementFee from 'client/map/filter/ManagementFee';
import PageSort from 'client/map/filter/PageSort';
import PriceUnit from 'client/map/filter/PriceUnit';
import RoomSize from 'client/map/filter/RoomSize';
import RoomType from 'client/map/filter/RoomType';
import Structure from 'client/map/filter/Structure';
import TransactionType from 'client/map/filter/TransactionType';
import InputRange from 'components/common/Price';

function Filter() {
  return (
    <div className="bg-background_beige sm:w-[375px] sm:m-auto">
      <Header />
      <div className="px-[18px] relative w-screen pb-[120px] sm:w-[375px] sm:m-auto">
        <TransactionType />
        <RoomType />
        <PriceUnit />
        <InputRange />
        <ManagementFee />
        <Floor />
        <Structure />
        <RoomSize />
        <ExtraFilter />
        <PageSort />
        <BottomNextBtn />
      </div>
    </div>
  );
}

export default Filter;
