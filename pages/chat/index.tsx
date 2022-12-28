import Image from 'next/image';
import Link from 'next/link';
import TabBar from 'components/main/TabBar';

export default function Chat() {
  return (
    <div className="bg-background_beige h-screen sm:w-[375px] sm:m-auto">
      <TabBar />
      Chat 개발중
    </div>
  );
}
