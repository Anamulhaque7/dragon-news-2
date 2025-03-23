import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import LatestNews from "../LatestNews";
import LeftNavbar from "../LayoutComponent/LeftNavbar";
import RigthNavbar from "../LayoutComponent/RigthNavbar";
import Navbar from "../Navbar";

const HomeLayout = () => {
    return (
        <div className="font-poppines">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="w-11/12 mx-auto py-2">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto  pt-5 grid md:grid-cols-12">
                <aside className="left col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6 "><Outlet></Outlet></section>
                <aside className="col-span-3">
                    <RigthNavbar></RigthNavbar>
                </aside>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;