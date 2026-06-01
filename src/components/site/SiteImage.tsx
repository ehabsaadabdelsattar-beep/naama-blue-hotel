type SiteImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

export function SiteImage({
  src,
  alt,
  className,
  priority = false,
  width,
  height,
}: SiteImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={className}
    />
  );
}
