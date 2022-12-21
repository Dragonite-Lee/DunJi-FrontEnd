interface PolicyCheckBoxProps {
  id: number;
  content: string;
  isCheck: boolean;
  handleCheck: () => void;
}

function PolicyItem({
  isCheck,
  id,
  content,
  handleCheck,
}: PolicyCheckBoxProps) {
  return (
    <div className="flex items-center w-full text-xl mb-10 ">
      <input type="checkbox" id={`check${id}`} className="hidden" />
      <label
        htmlFor={`check${id}`}
        className={`font-SegoeUI   inline-block before:content-[''] w-7 h-7 border border-blur mr-2  algin-middle font-NotoSansKR  rounded-md text-center ${
          isCheck ? "before:content-['✔️'] text-white " : ''
        }`}
        onClick={handleCheck}
      />
      <span className="  ml-2 text-xl font-normal">{content}</span>
    </div>
  );
}

export default PolicyItem;
