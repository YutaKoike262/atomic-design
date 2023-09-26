import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return <SHFooter>&copy; 2021 test Inc.</SHFooter>;
};

const SHFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  psition: fixed;
  bottom: 0;
  width: 100%;
`;
