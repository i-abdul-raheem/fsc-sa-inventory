import { useEffect, useState } from "react";
import "./App.css";
import { UiContext } from "./context";
import { Router } from "./routes";
import { Toast } from "./components";

export default function App() {
  const [toast, setToast] = useState(false);
  const [toastMsg, setToastMsg] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
      setToastMsg(null);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [toast]);
  return (
    <UiContext.Provider value={{ toast, setToast, toastMsg, setToastMsg }}>
      <Router />
      {toast && <Toast setToast={setToast} toastMsg={toastMsg} />}
    </UiContext.Provider>
  );
}
