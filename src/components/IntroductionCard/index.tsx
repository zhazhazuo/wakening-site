import React, { FC } from "react"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const IntroductionCard: FC<Props> = (props) => {
  return (
    <div className=' rounded-md px-3 py-5 bg-[#1b152a]'>
      <p className='text-2xl mb-3 text-orange-500'>
        Alias cumque veritatis sit in et enim ab!
      </p>
      <p className='text-sm text-gray-300'>
        Soluta non dolor sapiente vel eligendi dolorem blanditiis, dolorem
        dicta! Soluta eaque non magnam ut et non provident.
      </p>
    </div>
  )
}

IntroductionCard.defaultProps = defaultProps

export default IntroductionCard
