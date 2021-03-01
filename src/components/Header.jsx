import styled from "styled-components";
import { Link , useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../crown.svg";
import auth from "../auth";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px;
  box-shadow: 0 2px 15px #a3a3a3;
  h1 {
    margin-left: 1.5rem;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  font-size: 20px;
  * {
    margin-right: 20px;
  }
  span:first-child {
    font-weight: bold;
  }
`;

export default function Header({ currentUser, setCurrentUser }) {
  let title,
    location = useLocation();

  switch (location.pathname) {
    case "/collections":
      title = "All Collections";
      break;
    case "/loginregister":
      title = "Login or Register";
      break;
    case "/collections/hats":
      title = "Hats";
      break;
    case "/collections/jackets":
      title = "Jackets";
      break;
    case "/collections/sneakers":
      title = "Sneakers";
      break;
    case "/collections/womens":
      title = "Womens";
      break;
    case "/collections/mens":
      title = "Mens";
      break;
    default:
      title = "The Soul Store";
  }

  document.title = `The Soul Store - ${title === "The Soul Store" ? "Home" : title}`;

  return (
    <Nav>
      <Left>
        <Link to="/">
          <Logo />
        </Link>
        <h1>{title}</h1>
      </Left>
      <Right>
        <span>
          {currentUser && `Hi ${currentUser.user_metadata?.full_name || currentUser.email}`}
        </span>
        <Link to="/collections">All Collections</Link>
        {!currentUser && <Link to="/loginregister">Login or Register</Link>}
        <Link to="/">Contact</Link>
        {currentUser && (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              auth.currentUser().logout();
              setCurrentUser(null);
            }}
          >
            Logout
          </span>
        )}
      </Right>
    </Nav>
  );
}
