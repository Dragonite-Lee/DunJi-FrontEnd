import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface ContentItemType {
  content: string;
  path: string;
  onAction?: () => void;
}

function ContentItem({ content, path, onAction }: ContentItemType) {
  return (
    <div className="flex items-center justify-between text-[15px] Pretendard-Regular py-[16px]">
      <div>{content}</div>
      <Link href={path} passHref>
        <div onClick={onAction}>
          <a>
            <FontAwesomeIcon icon="chevron-right" />
          </a>
        </div>
      </Link>
    </div>
  );
}

export default ContentItem;
