import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header";
export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )


}