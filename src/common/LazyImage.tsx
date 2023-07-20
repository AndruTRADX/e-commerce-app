import { useRef, useEffect, useState } from 'react'
import type { ImgHTMLAttributes } from 'react'
import { base64img } from '../utils/img'

type LazyImageProps = { src: string }
type ImageNativeTypes = ImgHTMLAttributes<HTMLImageElement>

type Props = LazyImageProps & ImageNativeTypes

const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null)
  const [currentSrc, setCurrentSrc] = useState<string>(base64img)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src)
        }
      })
    })

    if (node.current) {
      observer.observe(node.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [src])

  return <img ref={node} src={currentSrc} {...imgProps} />
}

export default LazyImage
