import { Container } from "./styles/styled.Container";
import { StyleHeader } from "./styles/styled.Header";
import { Flex } from "./styles/styled.Flex";
import * as styled from "./styles/styled.Header";

export default function Header() {
  return (
    <StyleHeader>
      <Container>
        <styled.Nav>
          <styled.Logo src="images/logo.svg" alt="" />
          <styled.Button>Try it free!</styled.Button>
        </styled.Nav>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <styled.Button bg="#ff0099" color="#fff">
              Get Started For Free
            </styled.Button>
          </div>
          <styled.Image src="images/illustration-mockups.svg" />
        </Flex>
      </Container>
    </StyleHeader>
  );
}
