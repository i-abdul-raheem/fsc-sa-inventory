import { useContext, useState } from "react";
import { AuthService } from "../services";
import { useNavigate } from "react-router-dom";
import { UiContext } from "../context";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setToast, setToastMsg } = useContext(UiContext);
  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const res = await AuthService.login(
      formData.get("username"),
      formData.get("password")
    );
    if (res.status !== 200) {
      setError(res.message);
    } else {
      setToastMsg(res.message);
      setToast(true);
      navigate("/dashboard");
    }
    setLoading(false);
  };
  return {
    error,
    loading,
    login,
  };
};
