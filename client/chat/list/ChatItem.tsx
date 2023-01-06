import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ChatItem() {
  return (
    <div className="flex gap-2.5 py-6 ">
      <div className="w-11	">
        
        <FontAwesomeIcon icon="user-circle" />
      </div>
      <div className="flex flex-col	 gap-1">
        <div className="flex gap-1 items-center		">
          <div className="text-base		">둥지 운영진</div>
          <div>pin</div>
          <div className="text-xs leading-6	">둥지시 둥지구 둥지동</div>
        </div>
        <div className="text-sm	text-stone-400">
          [공지사항] 둥지에 새로운 기능이 생겼습니다! 아래 링...
        </div>
        <div className="text-xs text-stone-400	">2시간 전</div>
      </div>
      <div className="w-20	">
        <i className="fa fa-user-circle" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default ChatItem;
