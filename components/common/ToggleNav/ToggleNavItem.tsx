interface ToggleNavItemProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

function ToggleNavItem({ title, isSelected, onClick }: ToggleNavItemProps) {
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
export default ToggleNavItem;
