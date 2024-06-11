import Image from 'next/image';

import { getGithubInfo } from '@/backend/actions/Member';

import WebsiteType from '@/enum/WebsiteType';

import ProfileProps from '@/interfaces/props/components/member/ProfileProps';

export default async function Profile({
  member: { name, intro, github: nodeId, instagram, blog },
}: ProfileProps) {
  const github = await getGithubInfo(nodeId);

  const websiteList = {
    [WebsiteType.GITHUB]: github?.url,
    [WebsiteType.INSTAGRAM]: instagram,
    [WebsiteType.BLOG]: blog,
  };

  return (
    <div>
      <div className="flex gap-5 w-[340px] h-[128px] p-5 border-[1.5px] border-[#9DB8FF] rounded-t-lg items-center">
        <Image
          className="rounded-full border border-gray-300 bg-[#B0C6FF]"
          width={80}
          height={80}
          src={github?.avatarUrl}
          alt={`${name}'s profile image`}
        />
        <div className="flex flex-col gap-1 justify-center">
          <h1 className="font-pretendard text-xl font-bold">{name}</h1>
          <h2 className="font-pretendard text-lg">{intro}</h2>
        </div>
      </div>
      <div className="flex w-[340px] h-[58px] pl-5 pr-7 items-center justify-between border-[1.5px] border-[#9DB8FF] rounded-b-lg border-t-0">
        {Object.entries(websiteList).map(([type, url], index) => (
          <div key={index}>
            {url ? (
              <a
                className="font-roboto italic text-[#3A70FF] font-black"
                target="_blank"
                href={url}
                rel="noreferrer"
              >
                {type}
              </a>
            ) : (
              <p className="font-roboto italic text-[#B6CDFF] font-black cursor-default">{type}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
