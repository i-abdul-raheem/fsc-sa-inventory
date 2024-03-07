import {
  AddVendor,
  DeleteVendor,
  EditVendor,
  VendorActions,
  VendorsTable,
} from "../components";
import { useVendor } from "../hooks";
import { AuthLayout } from "../layouts";

export const Vendors = () => {
  const {
    showDelete,
    showEdit,
    showAdd,
    title,
    setShowAdd,
    setShowDelete,
    setShowEdit,
  } = useVendor();
  return (
    <AuthLayout>
      <VendorActions setShowAdd={setShowAdd} />
      <VendorsTable setShowDelete={setShowDelete} setShowEdit={setShowEdit} />
      {showAdd && <AddVendor setShowAdd={setShowAdd} />}
      {showEdit && <EditVendor setShowEdit={setShowEdit} />}
      {showDelete && <DeleteVendor setShowDelete={setShowDelete} title={title} />}
    </AuthLayout>
  );
};
