import CategoryCards from "../components/CategoryCards";
import Homepage from "./Homepage";


const Layout = () => {
    return (
        <div className="roboto bg-[url(https://cdn.eso.org/images/screen/eso0932a.jpg)] pb-40 bg-cover bg-center bg-no-repeat">
            <Homepage></Homepage>
            <CategoryCards></CategoryCards>
        </div>
    );
};

export default Layout;