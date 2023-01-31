interface InfoItemProps {
  title: string;
  content: string;
  onEdit?: () => void;
}
function InfoItem({ title, content, onEdit }: InfoItemProps) {
  return (
    <div className="p-3.5">
      <div className="text-[13px] text-[#A9A7A2]">{title}</div>
      <div className="mt-1.5  flex  justify-between	">
        <div className="text-[15px]  ">{content}</div>
        {onEdit ? (
          <button
            onClick={onEdit}
            className="border-[1px solid black]	rounded-[5px] text-[5px] text-[#A9A7A2]"
          >
            수정
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default InfoItem;
