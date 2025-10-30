// libraries
import type {FC, ReactNode} from "react";
import { Navigate, useLocation } from "react-router-dom";

const isAuthed = () => {
  return !!(localStorage.getItem("auth_token") || sessionStorage.getItem("auth_token"));
};

const RequireAuth: FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  if (!isAuthed()) return <Navigate to="/login" replace state={{ from: location }} />;
  return <>{children}</>;
};

export default RequireAuth;
