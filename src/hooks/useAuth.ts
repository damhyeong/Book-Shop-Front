import {LoginProps} from "@/pages/Login";
import {useAuthStore} from "@/store/authStore";
import {login, resetPassword, resetRequest, signup} from "@/api/auth.api";
import {useAlert} from "@/hooks/useAlert";
import {useNavigate} from "react-router-dom";
import {SignupProps} from "@/pages/Signup";
import {useState} from "react";

export const useAuth = () => {
    const {showAlert} = useAlert();
    const navigate = useNavigate();

    const {storeLogin, storeLogout, isLoggedIn} = useAuthStore();

    const userLogin = (data : LoginProps)=> {
        login(data).then((res) => {
            storeLogin(res.token);

            showAlert("로그인이 성공하였습니다.");
            navigate("/");
        }, (error) => {
            showAlert("로그인 실패하였습니다.");
        })
    };

    const userSignup = async (data : SignupProps) => {
        await signup(data).then((res) => {
            showAlert("회원가입이 완료되었습니다.");
            navigate("/login");
        }).catch((error) => {
            showAlert(error.message);
        })
    }

    const userResetPassword = async (data : SignupProps) => {
        await resetPassword(data).then(() => {
            showAlert("비밀번호가 초기화 되었습니다.");
            navigate("/login");
        }).catch((err) => {
            showAlert(err.message);
        })
    }

    const [resetRequested, setResetRequested] = useState(false);

    const userResetRequest = async (data : SignupProps)=> {
        await resetRequest(data).then(() => {
            setResetRequested(true);
        }).catch((err) => {
            showAlert(err.message);
        })
    }

    return {userLogin, userSignup, userResetPassword, userResetRequest, resetRequested};
}