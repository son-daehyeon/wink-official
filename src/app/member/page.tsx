import Image from 'next/image';

import Profile from '@/components/member/Profile';

import { getMembers } from '@/backend/actions/Member';

import cloud from '@/../public/member/cloud_3d.png';

import styles from '@/styles/Member.module.css';

export default async function Member() {
  const members = await getMembers();

  return (
    <div>
      <div className="h-16" />

      <div className="flex flex-col items-center">
        <Image className="animate-updown py-8" src={cloud} alt={'cloud_3d.png'} width={216} />
        <h1
          className={`font-roboto font-black text-5xl lg:text-8xl text-[#D5DFFD] ${styles.text_border} tracking-wider whitespace-nowrap`}
        >
          NEW WAVE IN US
        </h1>
        <h2 className="font-roboto font-light italic text-lg lg:text-4xl text-[#5c80df] p-3">
          Introduction of WINK team members
        </h2>
        <div className="mt-8 mb-[124px] animate-updown-shadow h-2 bg-[#bec7e5] blur rounded-full" />
        <div />
      </div>

      <div className="grid justify-center gap-7 px-10 py-2.5 mb-[110px] grid-cols-[repeat(1,_340px)] 2xl:grid-cols-[repeat(4,_340px)] xl:grid-cols-[repeat(3,_340px)] md:grid-cols-[repeat(2,_340px)]">
        {members.map((member, index) => (
          <Profile key={index} member={member} />
        ))}
      </div>
    </div>
  );
}
