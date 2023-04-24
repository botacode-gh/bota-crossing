import Image from "next/image";

const PLACEHOLDER_IMG_URL = "https://dummyimage.com/600x400/000/fff.png";

export default function DummyImage({
  alt = "Placeholder image",
  width = 600,
  height = 400,
}) {
  return (
    <Image
      src={`${PLACEHOLDER_IMG_URL}&text=${alt}`}
      alt={alt}
      width={width}
      height={height}
    />
  );
}
