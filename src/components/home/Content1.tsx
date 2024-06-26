import Image from 'next/image';

import Content1Props from '@/interfaces/props/components/home/Content1Props';

import 'aos/dist/aos.css';

export default function Content1({ text1, text2, imageSrc1, imageSrc2 }: Content1Props) {
  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-[80px]">
      <div className="flex flex-col gap-[58px]">
        <h1 className="font-pretendard text-4xl md:text-5xl font-medium" data-aos="fade-right">
          {text1.split('\n').map((txt, index) => (
            <p key={index}>
              {txt}
              <br />
            </p>
          ))}
        </h1>

        <Image
          data-aos="fade-up"
          className="rounded-3xl w-screen md:w-[400px]"
          src={imageSrc1}
          alt={'Image 1'}
        />
      </div>

      <div className="flex flex-col gap-[62px]">
        <Image
          data-aos="fade-left"
          className="rounded-3xl w-screen md:w-[400px]"
          src={imageSrc2}
          alt={'Image 2'}
        />

        <h3 className="font-pretendard text-xl md:text-2xl font-medium" data-aos="fade-right">
          {text2.split('\n').map((txt, index) => (
            <p key={index}>
              {txt}
              <br />
            </p>
          ))}
        </h3>
      </div>
    </div>
  );
}
