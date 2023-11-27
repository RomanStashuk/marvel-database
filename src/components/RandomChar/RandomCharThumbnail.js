import Image from 'react-bootstrap/Image';

const RandomCharThumbnail = ({ src, name }) => {
  const className = `d-block object-fit-${
    src.includes('image_not_available') ? 'contains' : 'cover'
  }`;

  return (
    <Image
      src={src}
      className={className}
      width={180}
      height={180}
      alt={name}
    />
  );
};

export default RandomCharThumbnail;
