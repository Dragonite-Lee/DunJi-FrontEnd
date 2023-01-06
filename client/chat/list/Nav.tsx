import { useState } from 'react';

const NAV = [
  {
    key: 'put',
    title: '내놓은 방 거래',
  },
  {
    key: 'request',
    title: '구하는 방 거래',
  },
];

function ChatListNav() {
  const [selectListIndex, setSelectListIndex] = useState<string>('put');

  const onNavClick = (key: string) => {
    setSelectListIndex(key);
  };

  return (
    <div className="flex w-full bg-stone-50 px-4	">
      {NAV.map(({ key, title }) => (
        <ChatListNavItem
          key={key}
          title={title}
          isSelected={selectListIndex == key}
          onClick={() => onNavClick(key)}
        />
      ))}
    </div>
  );
}

function ChatListNavItem({
  title,
  isSelected,
  onClick,
}: {
  title: string;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`flex-1 text-center p-2.5 text-sm		${
        isSelected
          ? 'border-b-2 border-b-zinc-700  text-zinc-700'
          : 'text-stone-400'
      } `}
      onClick={onClick}
    >
      {title}
    </div>
  );
}

export default ChatListNav;
