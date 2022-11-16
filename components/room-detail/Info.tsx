import { useState } from "react";
import OpenLayout from "./OpenLayout";
import InfoField from "./InfoField";
import useRoomSizeConvert from "hooks/useRoomSizeConvert";

type propsType = {
    availFrom: string;
    availTo: string;
    availConsul: boolean;
    roomSize: string;
    floor: number;
    wholeFloor: number;
    struct: string;
    Address: string;
};
export default function Review({
    availFrom,
    availTo,
    availConsul,
    roomSize,
    floor,
    wholeFloor,
    struct,
    Address,
}: propsType) {
    const [open, setOpen] = useState(false);

    const availContent = availFrom + " 부터 \n" + availTo +" " + (availConsul ? "(협의가능)" : "(협의불가)");
    const availContentEnter = availContent.split('\n').map( line => {
        return (<span>{line}<br/></span>)
    });

    // const elevatorContent = elevator ?

    const arr = [
        {
            title: "입주가능일",
            data: availContentEnter,
        },
        { title: "면적", data: roomSize + "m2 / " + useRoomSizeConvert(Number(roomSize)) + "평" },
        { title: "층수", data: floor + "층 / " + wholeFloor + "층" },
        { title: "구조", data: struct },
        { title: "상세주소", data: Address },
    ];
    return (
        <OpenLayout open={open} setOpen={setOpen} title="방 정보">
            {arr.map((item, index) => (
                <div key={index}>
                    <InfoField
                        title={item.title}
                        content={item.data}
                        last={index !== arr.length - 1}
                    />
                </div>
            ))}
        </OpenLayout>
    );
}
