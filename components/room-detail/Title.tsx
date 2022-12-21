type propsType = {
  price: number;
  deposit: number;
  priceUnit: string;
  buildingID: any;
  dealType: string;
};
export default function Title({
  price,
  deposit,
  priceUnit,
  buildingID,
  dealType,
}: propsType) {
  return (
    <div className="mt-[16px] mb-[8px]">
      <div className="flex justify-between items-center mb-[3px] Pretendard-Regular">
        <div className="flex items-center">
          <div className="text-[12px] h-8 flex items-center px-2 text-white bg-dealType_Btn rounded-standard_rounded mr-[8px]">
            {dealType}
          </div>
        </div>
        <div className="flex h-full  text-[10px] text-font_gray items-center">
          매물번호: {buildingID}
        </div>
      </div>
      <div className="text-[23px] Pretendard-ExtraBold">
        {priceUnit} {price} / {deposit}
      </div>
    </div>
  );
}
