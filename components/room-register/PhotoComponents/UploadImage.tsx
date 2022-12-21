import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useRoomRegisterRedux from 'hooks/useRoomRegisterRedux';
import {
  dispatchMainImage,
  dispatchMainImageUrl,
} from 'store/modules/roomRegister';

export default function UploadImage() {
  const [state, dispatch] = useRoomRegisterRedux();

  //이미지 상대경로로 저장
  let file: any;
  const imageUrlLists: any = [];
  const imageShowLists: (string | ArrayBuffer | null)[] = [];

  const handleAddImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageLists = e.target.files;

    if (imageLists instanceof FileList) {
      for (let i = 0; i < imageLists.length; i++) {
        // *서버에보낼 용도
        const currentImageUrl = imageLists[i];
        imageUrlLists.push(currentImageUrl);
        // *프리뷰 용도
        file = imageLists[i];
        const reader = new FileReader();
        reader.onload = () => {
          imageShowLists[i] = reader.result;
          dispatch(dispatchMainImageUrl([...imageShowLists]));
        };
        reader.readAsDataURL(file);
      }
    }

    dispatch(dispatchMainImage(imageUrlLists));
  };

  const url: any = [];

  if (state.mainImageUrl.length) {
    for (let i = 0; i < state.mainImageUrl.length; i++) {
      url.push(state.mainImageUrl[i]);
    }
  }

  return (
    <div className="bg-component_white h-[150px] w-full rounded-standard_rounded flex items-center justify-center relative">
      {state.mainImageUrl.length ? (
        <div className="flex ">
          <label
            className="Pretendard-Regular text-[12px] text-center text-font_gray w-[350px] h-[150px] rounded-standard_rounded  items-center justify-center"
            htmlFor="image-upload-main"
          >
            {url[0] ? (
              <Image width={340} height={150} alt="사진로고" src={url[0]} />
            ) : (
              <Image
                width={340}
                height={150}
                alt="사진로고"
                src={require('../../../assets/icon/채팅메뉴_앨범.svg')}
              />
            )}
          </label>
          <input
            onChange={handleAddImages}
            type="file"
            className="hidden"
            id="image-upload-main"
            accept="image/*"
          />
        </div>
      ) : (
        <div className="bg-component_white h-[150px] w-full rounded-standard_rounded flex items-center justify-center relative">
          <label
            className="Pretendard-Regular text-[12px] text-center text-font_gray w-24 h-28  items-center justify-center"
            htmlFor="image-upload-main"
          >
            <Image
              width={50}
              height={50}
              alt="사진로고"
              src={require('../../../assets/icon/채팅메뉴_앨범.svg')}
            />
            <div>사진 선택</div>
          </label>
          <input
            onChange={handleAddImages}
            type="file"
            className="hidden"
            id="image-upload-main"
            accept="image/*"
          />
        </div>
      )}
    </div>
  );
}
