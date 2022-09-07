import React, { FC, useEffect, useState } from "react"
import { createPropsGetter } from "@golink/link-core"
import cls from "classnames"
import "./index.scss"

interface IProps {
  width: string
  height: string
  url: string
}

const defaultProps = {
  fuzzyUrl: "",
  isFuzzyLoad: false,
}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const getProps = createPropsGetter<DefaultProps>()

const Picture: FC<Props> = (props) => {
  const { width, height, url, isFuzzyLoad, fuzzyUrl } = getProps(props)
  const [isShow, setIsShow] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaceholderLoaded, setIsPlaceholderLoaded] = useState(false)

  const ImgClassName = cls("picture__img", {
    "picture__img--hidden": !isLoaded,
  })
  const PlaceholderClassName = cls("picture__img picture__placeholder", {
    "picture__placeholder--hidden": !isPlaceholderLoaded,
  })

  const imgLoadHandle = () => {
    setIsLoaded(true)
  }

  const placeholderLoadHandle = () => {
    setIsPlaceholderLoaded(true)
  }

  useEffect(() => {
    setIsShow(true)
  }, [])

  return (
    <div
      className='picture'
      style={{
        width,
      }}
    >
      <div
        style={{
          paddingBottom: height,
        }}
      />
      {isShow && isFuzzyLoad && (
        <img
          className={PlaceholderClassName}
          src={fuzzyUrl}
          alt=''
          onLoad={placeholderLoadHandle}
        />
      )}
      <picture>
        {isShow && (
          <img
            className={ImgClassName}
            src={url}
            alt=''
            onLoad={imgLoadHandle}
          />
        )}
      </picture>
    </div>
  )
}

Picture.defaultProps = defaultProps

export default Picture
