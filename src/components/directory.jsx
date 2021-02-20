// import { useState } from "react";
import styled from "styled-components";
import { Link as UnstyledLink } from "react-router-dom";

import MenuItem from "./menu-item";

const menuData = [
  {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "shop/hats",
  },
  {
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    linkUrl: "shop/jackets",
  },
  {
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    linkUrl: "shop/sneakers",
  },
  {
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    id: 4,
    linkUrl: "shop/womens",
  },
  {
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    id: 5,
    linkUrl: "shop/mens",
  },
];

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Link = styled(UnstyledLink)`
  text-decoration: none;
  flex: 1 1 auto;
  min-width: 30%;
  color: inherit;
`

export default function Directory() {
  return (
    <Wrapper>
      {menuData.map((data) => (
        <Link key={data.id} to={data.linkUrl}>
          <MenuItem {...data} />
        </Link>
      ))}
    </Wrapper>
  );
}
