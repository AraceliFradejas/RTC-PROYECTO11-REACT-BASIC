import images from '../content/images.json';

export default function Artwork({ asset, alt = '', className, eager = false }) {
  const image = images[asset];
  if (!image) return null;
  return (
    <img
      className={className}
      src={image.src}
      onError={(event) => {
        if (
          image.localSrc &&
          event.currentTarget.getAttribute('src') !== image.localSrc
        )
          event.currentTarget.src = image.localSrc;
      }}
      width={image.width}
      height={image.height}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : 'auto'}
      decoding="async"
    />
  );
}
