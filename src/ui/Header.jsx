import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-gray-0);
  border-right: 1px solid var(--color-gray-100);
  padding: 1.2rem 4.8rem;
`;
function Header() {
  return <StyledHeader>Header</StyledHeader>;
}

export default Header;
