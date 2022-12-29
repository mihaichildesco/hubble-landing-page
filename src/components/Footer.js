import SocialIcons from "./SocialsIcons";
import { Container } from "./styles/styled.Container";
import { Flex } from "./styles/styled.Flex";
import { StyledFooter } from "./styles/styled.Footer";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="images/logo_white.svg" alt="" />
        <Flex>
          <ul>
            <li>
              Varius morbi enim nunc faucibus a pellentesque sit amet porttitor
              eget dolor morbi non arcu risus quis varius quam
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; 2021 Huddle. All</p>
      </Container>
    </StyledFooter>
  );
}
