// import { useState } from "react";
import styled from "styled-components";
import { Link as UnstyledLink } from "react-router-dom";

import CollectionCard from "./CollectionCard";
import MENU_DATA from "../data/menu-data.js";

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
`;

export default function CollectionCardList() {
  return (
    <Wrapper>
      {MENU_DATA.map((data) => (
        <Link key={data.id} to={data.linkUrl}>
          <CollectionCard {...data} />
        </Link>
      ))}
    </Wrapper>
  );
}
