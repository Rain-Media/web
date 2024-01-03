import Image from "next/image";

const ImageResize = ({ src, containerWidth, containerHeight, alt }) => {
  return (
    <div
      className={`w-[${containerWidth}] ${containerWidth} h-[${containerHeight}] relative transition-all duration-500`}
    >
      <Image src={src} alt={alt} width={200} />
    </div>
  );
};

export default ImageResize;
