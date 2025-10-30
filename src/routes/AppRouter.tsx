// libraries
import type {FC} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// components
import Layout from "./../components/layout/Layout";
import LoginPage from "./../pages/login/LoginPage.tsx";
import DashboardPage from "./../pages/dashboard/DashboardPage";
import RequestsPage from "./../pages/requests/RequestsPage.tsx";
import ProfilePage from "./../pages/profile/ProfilePage";
import ProjectsPage from "./../pages/projects/ProjectsPage";
import AuthLayout from "./../components/authleyout/AuthLayout";
import RequireAuth from "./RequireAuth";

const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
        path="/login"
        element={
          <AuthLayout>
            <LoginPage />
          </AuthLayout>
        }
      />

        <Route path="/" element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
          }>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="requests" element={<RequestsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Route>

        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
