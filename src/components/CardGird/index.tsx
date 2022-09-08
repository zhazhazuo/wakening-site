import React, { FC } from "react"
import IntroductionCard from "../IntroductionCard"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const CardGird: FC<Props> = (props) => {
  return (
    <div className=''>
      <p className='text-base'>title</p>
      <div className='grid grid-cols-3 gap-3'>
        <IntroductionCard />
        <IntroductionCard />
        <IntroductionCard />
        <IntroductionCard />
      </div>
    </div>
  )
}

CardGird.defaultProps = defaultProps

export default CardGird
