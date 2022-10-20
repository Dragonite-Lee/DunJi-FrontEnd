import Header from "components/filter/Header";
import RoomType from "components/filter/RoomType";
import TransactionType from "components/filter/TransactionType";
import InputRange from "components/common/InputRange";
import ManagementFee from "components/filter/ManagementFee";
import Floor from "components/filter/Floor";
import Structure from "components/filter/Structure";
import ExtraFilter from "components/filter/ExtraFilter";
import TransactionType2 from "components/filter/TransactionType2";
import PriceUnit from "components/filter/PriceUnit";
import ApprovalDate from "components/filter/ApprovalDate";

export default function Filter() {
    return (
        <div className="mb-12 bg-background_beige sm:w-[375px] sm:m-auto">
            <Header />
            <div className="px-[18px] w-screen mb-4 sm:w-[375px] sm:m-auto">
                <TransactionType />
                <PriceUnit />
                <RoomType />
                <InputRange />
                <ManagementFee />
                <Floor />
                <Structure />
                <ApprovalDate />
                <ExtraFilter />
                <TransactionType2 />
            </div>
        </div>
    );
}
