import { useState } from 'react';
import Image from 'next/image';
import Map from 'client/room/Map';

interface LocationProps {
  latitude: number;
  longitude: number;
}

function Location({ latitude, longitude }: LocationProps) {
  const [open, setOpen] = useState(false);

  const openHandler = () => setOpen(!open);

  return (
    <div className="w-full rounded-standard_rounded bg-component_white my-4">
      <div
        onClick={openHandler}
        className={`${
          open && `border-b border-border_color`
        } h-20 text-[17px] Pretendard-SemiBold  flex items-center px-[18px]`}
      >
        위치 / 주변
        <div className={`ml-auto w-10 h-12 relative ${open && 'rotate-180'}`}>
          <Image
            src={require('assets/icon/화살표_펼치기.svg')}
            alt="arrow"
            objectFit="contain"
            layout="fill"
            className="rotate-180"
          />
        </div>
      </div>
      {open && <Map latitude={latitude} longitude={longitude} />}
    </div>
  );
}

export default Location;