import ContentItem, { ContentItemType } from 'client/myPage/index/ContentItem';

interface ContentListProps {
  title: string;
  itemList: ContentItemType[];
}

function ContentList({ title, itemList }: ContentListProps) {
  return (
    <div>
      <div className="pt-[28px] Pretendard-SemiBold text-[17px] pb-[16px]  text-[#3F3C3A]">
        {title}
      </div>
      {itemList.map(({ path, content, onAction }) => (
        <ContentItem
          key={content}
          content={content}
          path={path}
          onAction={onAction}
        />
      ))}
    </div>
  );
}

export default ContentList;
