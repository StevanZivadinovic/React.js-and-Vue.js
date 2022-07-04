import React from 'react'
import { Button } from '../styles/Button.styled'
import { Container } from '../styles/Container.styled'
import { Flex } from '../styles/Flex.styled'
import { HeaderStyle, Image, Logo } from '../styles/HeaderStyle.styled'
import { Nav } from '../styles/Nav.styled'

export const Header = () => {
  return (
    <HeaderStyle headerBGColor='blue'>
      <Container>
      <Nav>
        <Logo src='./../assets/img/logo.svg' alt='logo'></Logo>
        <Button>Try It Free</Button>
      </Nav>

      <Flex>
        <div>
          <h1>
            Build The Community Your Fans Will Love
          </h1>
          <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg='#ff0099' color='#fff'>
              Get Started For Free
            </Button>
        </div>
        <Image src='./../assets/img/illustration-mockups.svg' alt='header image'></Image>
      </Flex>
      </Container>
        </HeaderStyle>
  )
}
