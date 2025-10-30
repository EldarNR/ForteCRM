// libraries
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// routes
import AppRouter from "./routes/AppRouter";
// styles
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./styles/variables.css";
// language
import "./i18n/i18n";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
