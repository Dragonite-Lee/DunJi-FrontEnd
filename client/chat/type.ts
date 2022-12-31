// - id : 유저의 데이터베이스 고유 id
// - email : 유저의 email 주소
// - nickname : 유저의 닉네임
// - name : 유저의 이름
// - age : 유저의 나이
// - modifiedAt : 수정일

export interface ChatMessageType {
  sender: string;
  message: string;
  createTime?: string;
}

// - userName: 상대방 유저 닉네임
// - roomAddress:  매물 주소
// - lastMessage: 채팅 마지막 메세지
// - lastMessageTime: 채팅 마지막 메세지 보낸 시간(현재 시간을 기준으로)
// - imageURL: 매물 이미지
// - notReadMessageCount: 읽지않는 메세지 개수
// - roomDeposit: 매물 보증금,
// - roomPrice: 매물 월세 가격

export interface ChatRoomType {
  chatRoomId: number;
  userName: string;
  roomAddress: string;
  lastMessage: string;
  lastMessageTime: string;
  imageURL: string;
  notReadMessageCount: number;
  roomDeposit: number;
  roomPrice: number;
}
