interface ContentFieldProps {
  content: string | JSX.Element[] | number;
  last: boolean;
  title: string;
}

function ContentField({ content, last, title }: ContentFieldProps) {
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

export default ContentField;
