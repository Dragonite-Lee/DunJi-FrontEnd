import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function contractType() {

    const contractTypeArr = [
        {
            type: "전대차 계약일 경우 (단기임대 포함)",
        },
        {
            type: "양도양수 계약일 경우",
        },
        {
            type: "파일 다운로드",
        },
    ];

    return (
        
        <div>
            {contractTypeArr.map((item, index) => (
                <div
                    key={index}
                    className="py-10 px-standard_pd my-4 mx-12 bg-white rounded-standard_rounded h-room_register_btn_height1 text-xl flex justify-between items-center" 
                >
                    <div>{item.type}</div>
                    <FontAwesomeIcon icon="chevron-down" />
                </div>
            ))}
        </div>
            
        
    )
}