import { FaPlus, FaTimes } from "react-icons/fa";
import { Button } from "../Button";
import { Input } from "../Input";
import { Row } from "../Inventory";

export const AddCustomer = ({ setShowAdd }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
      <form className="bg-secondary p-3 w-full max-w-[280px] rounded-xl">
        <Row>
          <Input placeholder={"Company Name"} className={"w-full"} />
          <Input placeholder={"Contact Person"} className={"w-full"} />
        </Row>
        <textarea
          placeholder="Address"
          className={
            "w-full border border-secondary active:border-primary bg-light rounded-md text-white px-3 py-2 "
          }
          name="address"
          //   disabled={loading}
          id="address"
          rows="5"
          //   value={address}
          //   onChange={(e) => setAddress(e.target.value)}
          required
        ></textarea>
        <Row>
          <Input placeholder={"Phone Number"} className={"w-full"} />
          <Input placeholder={"VAT Number"} className={"w-full"} />
        </Row>
        <Input placeholder={"Email Address"} className={"w-full"} />
        <div className={"flex items-center gap-2 py-3 justify-end"}>
          <Button
            onClick={() => setShowAdd(false)}
            className={"flex items-center justify-center gap-1"}
          >
            <FaTimes /> Cancel
          </Button>
          <Button className={"flex items-center justify-center gap-1"}>
            <FaPlus /> Add
          </Button>
        </div>
      </form>
    </div>
  );
};
