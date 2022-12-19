interface InfoFieldProps {
  content: string | JSX.Element[] | number;
  last: boolean;
  title: string;
}

function InfoField({ content, last, title }: InfoFieldProps) {
  return (
    <div
      className={`${
        last && `border-b border-border_color`
      } py-4 text-[14px] grid grid-cols-[1fr_2fr]`}
    >
      <span className="Pretendard-Regular">{title}</span>
      <span className="Pretendard-Regular">{content}</span>
    </div>
  );
}

export default InfoField;
