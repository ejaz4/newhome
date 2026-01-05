import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useLocation, useRoutes } from "react-router-dom"; // 1. Add these imports
import "./global.css";
import { routes } from "@generouted/react-router"; // 2. IMPORTANT: Import 'routes' (lowercase), not 'Routes'

// 3. We create a dedicated component to handle the routing logic
function AppRoutes() {
  const location = useLocation();

  // Check if we are linking from a background state (for the modal)
  const background = location.state && location.state.background;

  // Render the main app (Feed/Page)
  // If background exists, force the app to think we are still at the background URL
  const app = useRoutes(routes, background || location);

  // Render the modal
  // Always use the real URL here. If the URL matches a modal route, it renders.
  const modal = useRoutes(routes, location);

  return (
    <>
      {app}
      {/* Only render the modal layer if there is a background to show behind it */}
      {background && modal}
    </>
  );
}

// 4. Wrap everything in BrowserRouter
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
);
