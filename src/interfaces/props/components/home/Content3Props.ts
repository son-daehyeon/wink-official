import {StaticImageData} from "next/image";

export default interface Content3Props {
  subject: string | null;
  title: string;
  text: string;
  reverse: boolean;
  imageSrc: StaticImageData;
  imageAlt: string;
}
