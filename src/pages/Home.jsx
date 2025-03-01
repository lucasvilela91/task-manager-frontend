import Sidebar from "../components/SideBar";
import Tasks from "../components/Tasks";

import "./Home.scss";

const Home = () => {
    return (
        <div className="home-app-container">
            <Sidebar />
            <Tasks />
        </div>
    );
};

export default Home;
