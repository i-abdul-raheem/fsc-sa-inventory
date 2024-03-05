import { FaTimes } from "react-icons/fa";

export const Toast = ({ setToast, toastMsg }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full p-3 z-50 flex items-center justify-end">
      <div className="w-full max-w-[280px] p-3 text-white bg-primary border border-secondary rounded-lg text-xs flex items-center justify-between">
        <span className="w-[calc(100%-20px)]">{toastMsg}</span>
        <FaTimes className="cursor-pointer w-[20px]" onClick={() => setToast(false)} />
      </div>
    </div>
  );
};
