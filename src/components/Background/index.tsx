import { createPropsGetter } from "@golink/link-core"
import React, { FC, ReactNode } from "react"

interface IProps {}

const defaultProps = {
  children: "" as ReactNode,
}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const getProps = createPropsGetter<DefaultProps>()

const Background: FC<Props> = (props) => {
  const { children } = getProps(props)

  return (
    <div className='w-full h-full relative'>
      <div className='w-full h-full absolute z-20'>{children}</div>
      <div
        className='w-full h-full absolute z-10'
        style={{
          backdropFilter: "saturate(180%) blur(20px)",
        }}
      ></div>
      {/* TODO 每次访问都爬一张最新的 */}
      <img
        className='w-full h-full object-cover absolute'
        src='https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3017&q=80'
      />
    </div>
  )
}

Background.defaultProps = defaultProps

export default Background
