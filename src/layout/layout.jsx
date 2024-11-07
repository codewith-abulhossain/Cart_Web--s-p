import AppNav from "../component/app-nav.jsx";
import Footer from "../component/footer.jsx";
const Layout = (props) => {

    return (
        <>
            <AppNav/>
                {props.children}
            <Footer/>
        </>
    );
};

export default Layout;