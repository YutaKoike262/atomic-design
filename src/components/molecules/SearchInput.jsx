import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";
import styled from "styled-components";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWraper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWraper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SButtonWraper = styled.div`
  padding-left: 8px;
`;
