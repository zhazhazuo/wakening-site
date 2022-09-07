import React, { FC, ReactNode } from "react"

interface IProps {
  children: ReactNode
}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const LayoutBlock: FC<Props> = (props) => {
  const { children } = props
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <div className='w-[42rem] h-full'>{children}</div>
    </div>
  )
}

LayoutBlock.defaultProps = defaultProps

export default LayoutBlock
