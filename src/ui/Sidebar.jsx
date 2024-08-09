import styled from "styled-components";

const StyledSidebar = styled.aside`
  grid-row: 1/ -1;
  background-color: var(--color-gray-0);
  border-right: 1px solid var(--color-gray-100);
  padding: 3.2rem 2.4rem;
`;
function Sidebar() {
  return <StyledSidebar>Sidebar</StyledSidebar>;
}

export default Sidebar;
