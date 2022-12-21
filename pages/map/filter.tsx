import InputRange from 'components/common/Price';
import BottomNextBtn from 'components/filter/BottomNextBtn';
import ExtraFilter from 'components/filter/ExtraFilter';
import Floor from 'components/filter/Floor';
import Header from 'components/filter/Header';
import ManagementFee from 'components/filter/ManagementFee';
import PageSort from 'components/filter/PageSort';
import PriceUnit from 'components/filter/PriceUnit';
import RoomSize from 'components/filter/RoomSize';
import RoomType from 'components/filter/RoomType';
import Structure from 'components/filter/Structure';
import TransactionType from 'components/filter/TransactionType';
import useMapFilterRedux from 'hooks/useMapFilterRedux';

export default function Filter() {
  const [state, dispatch] = useMapFilterRedux();

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
