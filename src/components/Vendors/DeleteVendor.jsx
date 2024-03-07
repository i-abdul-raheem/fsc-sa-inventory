import { Button } from "../Button";

export const DeleteVendor = ({ title, setShowDelete }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#00000066] flex items-center justify-center z-50">
      <form className="relative w-full max-w-[280px] p-3 px-5 bg-secondary rounded-lg">
        <h3 className="text-2xl font-semibold border-b border-b-[#555] pb-2">
          Delete Vendor
        </h3>
        <p className="py-3 border-b border-b-[#555]">
          Are you sure you want to delete{" "}
          <span className="font-bold">{title}</span>?
        </p>
        <div className="flex w-full items-center justify-end gap-2 pt-3">
          <Button onClick={() => setShowDelete(false)}>Cancel</Button>
          <Button type="submit">Delete</Button>
        </div>
      </form>
    </div>
  );
};
