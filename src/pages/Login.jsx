import { useNavigate } from "react-router-dom";

import CustomButton from "../components/CustomButton";

import "./Login.scss";
import logo from "../assets/images/logo.svg";

const Login = () => {
    const navigate = useNavigate();

    const handleSingInClick = () => {
        navigate("/");
    };
    return (
        <div className="login-container">
            <img src={logo} alt=" LV developer" />
            <div className="button-container">
                <CustomButton onClick={handleSingInClick}>Entrar</CustomButton>
            </div>
        </div>
    );
};

export default Login;
