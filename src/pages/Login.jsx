import CustomButton from "../components/CustomButton";

import "./Logo.scss";
import logo from "../assets/images/logo.svg";

const Login = () => {
    return (
        <div className="login-container">
            <img src={logo} alt=" LV developer" />
            <div className="button-container">
                <CustomButton>Entrar</CustomButton>
            </div>
        </div>
    );
};

export default Login;
