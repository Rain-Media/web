import Image from 'next/image';

const ImageResize = ({ src, containerWidth, containerHeight, alt }) => {
  return (
    <div className={`w-[${ containerWidth }] h-[${ containerHeight }] relative`}>
      <Image
        src={src}
        alt={alt}
        width={containerWidth}
      />
    </div>
  );
};

export default ImageResize
