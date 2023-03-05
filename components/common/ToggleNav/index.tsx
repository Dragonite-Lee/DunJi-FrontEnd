import { useState } from 'react';
import ToggleNavItem from 'components/common/ToggleNav/ToggleNavItem';

interface ToggleNavItemType {
  key: string;
  title: string;
}

interface ToggleNavProps {
  list: ToggleNavItemType[];
}

function ToggleNav({ list }: ToggleNavProps) {
  const [selectListIndex, setSelectListIndex] = useState<string>('put');

  const onNavClick = (key: string) => {
    setSelectListIndex(key);
  };

  return (
    <div className="flex w-full bg-stone-50 px-4	">
      {list.map(({ key, title }) => (
        <ToggleNavItem
          key={key}
          title={title}
          isSelected={selectListIndex == key}
          onClick={() => onNavClick(key)}
        />
      ))}
    </div>
  );
}

export default ToggleNav;
