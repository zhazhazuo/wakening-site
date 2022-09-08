import React, { FC } from "react"
import Background from "../components/Background"
import CardGird from "../components/CardGird"
import LayoutBlock from "../components/LayoutBlock"

interface IProps {}

const defaultProps = {}

type DefaultProps = Readonly<typeof defaultProps>

type Props = IProps & Partial<DefaultProps>

const Home: FC<Props> = (props) => {
  return (
    <div className='w-screen h-screen'>
      <Background>
        <LayoutBlock>
          <div className='w-full h-full '>
            <CardGird />
          </div>
        </LayoutBlock>
      </Background>
    </div>
  )
}

Home.defaultProps = defaultProps

export default Home
