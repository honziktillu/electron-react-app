import { createRoot } from "react-dom/client";
import AppRoutes from "./pages/AppRoutes";

function render() {
    const root = createRoot(document.getElementById("app"));
    root.render(<AppRoutes />);
}

render();