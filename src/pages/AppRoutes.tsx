import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import SignIn from "./SignIn";

function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </HashRouter>
    );
}

export default AppRoutes;