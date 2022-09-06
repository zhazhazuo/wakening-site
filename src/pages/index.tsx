import React, { FC } from "react"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Home: FC<Props> = (props) => {
  return <div className='Home'></div>
}

Home.defaultProps = defaultProps

export default Home
