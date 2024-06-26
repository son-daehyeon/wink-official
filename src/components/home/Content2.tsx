import Image from 'next/image';

import Content2Props from '@/interfaces/props/components/home/Content2Props';

import 'aos/dist/aos.css';

export default function Content2({ title, imageSrc, imageAlt }: Content2Props) {
  return (
    <div className="flex flex-col gap-8 md:gap-12 py-[98px] md:py-[198px]">
      <h1
        className="font-pretendard text-black font-medium text-4xl md:text-5xl"
        data-aos="fade-right"
      >
        {title.split('\n').map((txt, index) => (
          <p key={index}>
            {txt}
            <br />
          </p>
        ))}
      </h1>

      <Image
        className="rounded-3xl shadow-[0px 0px 100px rgba(255, 255, 255, 0.1)]"
        data-aos="zoom-in"
        data-aos-delay="200"
        src={imageSrc}
        alt={imageAlt}
        width={880}
      />
    </div>
  );
}
