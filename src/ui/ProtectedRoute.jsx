import styled from "styled-components";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { Navigate } from "react-router-dom";
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: grid;
  place-items: center;
`;
function ProtectedRoute({ children }) {
  const { user, isLoading } = useUser();

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (!user?.aud) return <Navigate to={"/login"} />;
  return children;
}

export default ProtectedRoute;
