import { useEffect, useRef, useState } from 'react'
import type { ImgHTMLAttributes, SyntheticEvent } from 'react'
import { lqipBySrc } from '@resources/lqip'

export type ProgressiveImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string
}

/** Tiny placeholder covers the frame, then fades out after the full image loads. */
export default function ProgressiveImage({
  src,
  className = '',
  alt = '',
  onLoad,
  ...rest
}: ProgressiveImageProps) {
  const placeholder = lqipBySrc[src]
  const imageRef = useRef<HTMLImageElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const node = imageRef.current
    if (node?.complete && node.naturalWidth > 0) {
      setLoaded(true)
      return
    }
    setLoaded(false)
  }, [src])

  function handleLoad(event: SyntheticEvent<HTMLImageElement>) {
    setLoaded(true)
    onLoad?.(event)
  }

  if (!placeholder) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={onLoad}
        {...rest}
      />
    )
  }

  const positioned = className.split(/\s+/).includes('absolute')
  const full = (
    <img
      src={src}
      alt={alt}
      className={className}
      ref={imageRef}
      onLoad={handleLoad}
      {...rest}
    />
  )
  const overlay = (
    <img
      src={placeholder}
      alt=""
      aria-hidden
      className={[
        positioned ? className : '',
        'pointer-events-none scale-105 blur-md transition-opacity duration-500',
        positioned
          ? ''
          : 'absolute inset-0 size-full',
        className.includes('object-contain') ? 'object-contain' : 'object-cover',
        loaded ? 'opacity-0' : 'opacity-100',
      ]
        .filter(Boolean)
        .join(' ')}
    />
  )

  if (positioned) {
    return (
      <>
        {full}
        {overlay}
      </>
    )
  }

  return (
    <span className="relative block w-full">
      {full}
      {overlay}
    </span>
  )
}
