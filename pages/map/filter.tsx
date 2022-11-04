import Header from "components/filter/Header";
import RoomType from "components/filter/RoomType";
import TransactionType from "components/filter/TransactionType";
import InputRange from "components/common/Price";
import ManagementFee from "components/filter/ManagementFee";
import Floor from "components/filter/Floor";
import Structure from "components/filter/Structure";
import ExtraFilter from "components/filter/ExtraFilter";
import PriceUnit from "components/filter/PriceUnit";
import RoomSize from "components/filter/RoomSize";
import PageSort from "components/filter/PageSort";
import useMapFilterRedux from "hooks/useMapFilterRedux";
import BottomNextBtn from "components/filter/BottomNextBtn";

export default function Filter() {
    const [state,dispatch] = useMapFilterRedux();
    console.log(state)
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
