import { FaPlus } from "react-icons/fa";
import { Button } from "../Button";
import { Input } from "../Input";

export const VendorActions = ({ setShowAdd }) => {
  return (
    <div className="flex justify-between items-center">
        <h2 className="ps-3 font-thin text-2xl uppercase">Vendors</h2>
      <div className="flex w-full items-center justify-end gap-2 p-3">
        <Input type="search" placeholder={"Search..."} />
        <Button
          onClick={() => setShowAdd(true)}
          className={"flex items-center justify-center gap-2"}
        >
          <FaPlus /> Add New
        </Button>
      </div>
    </div>
  );
};
