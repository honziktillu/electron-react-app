import { createRoot } from "react-dom/client";
import AppRoutes from "./pages/AppRoutes";

function render() {
    const root = createRoot(document.getElementById("page-content"));
    root.render(<AppRoutes />);
}

render();