import Image from 'next/image';

interface ChatItemProps {
  onClick: () => void;
}
function ChatItem({ onClick }: ChatItemProps) {
  return (
    <div className="flex gap-2.5 py-6 " onClick={onClick}>
      <div className="w-[43px] min-w-[43px]">
        {/* person-circle.svg */}
        <Image
          src={require('assets/icon/chat/interface-user-circle.png')}
          width={43}
          height={43}
          alt="profile"
        />
      </div>
      <div className="flex flex-col	gap-1">
        <div className="flex gap-1 items-center ">
          <div className="text-[15px]		">둥지 운영진</div>
          <div>pin</div>
          <div className="text-[11px] leading-6	">둥지시 둥지구 둥지동</div>
        </div>
        <div className="text-3.5	text-[#A9A7A2] whitespace-nowrap overflow-hidden text-ellipsis max-w-[220px] ">
          [공지사항] 둥지에 새로운 기능이 생겼습니다! 아래 링...
        </div>
        <div className="text-xs text-[#A9A7A2]">2시간 전</div>
      </div>
      <div className="w-[77px]">
        <Image
          src={require('assets/images/room.png')}
          width={77}
          height={43}
          alt="profile"
        />
      </div>
    </div>
  );
}

export default ChatItem;
