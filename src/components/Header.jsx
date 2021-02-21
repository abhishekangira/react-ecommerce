import styled from "styled-components";
import { Link as UnstyledLink } from "react-router-dom";
import { ReactComponent as Logo } from "../crown.svg";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px;
  box-shadow: 0 2px 15px #a3a3a3;
`;

const Link = styled(UnstyledLink)`
  margin-right: 20px;
  font-size: 20px;
`;

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <Logo />
      </Link>
      <div>
        <Link to="/collections">All Collections</Link>
        <Link to="/">Contact</Link>
      </div>
    </Nav>
  );
}
