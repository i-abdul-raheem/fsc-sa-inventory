import {
  AddCustomer,
  DeleteCustomer,
  EditCustomer,
  CustomerActions,
  CustomersTable,
} from "../components";
import { useCustomer } from "../hooks";
import { AuthLayout } from "../layouts";

export const Customers = () => {
  const {
    showDelete,
    showEdit,
    showAdd,
    title,
    setShowAdd,
    setShowDelete,
    setShowEdit,
  } = useCustomer();
  return (
    <AuthLayout>
      <CustomerActions setShowAdd={setShowAdd} />
      <CustomersTable setShowDelete={setShowDelete} setShowEdit={setShowEdit} />
      {showAdd && <AddCustomer setShowAdd={setShowAdd} />}
      {showEdit && <EditCustomer setShowEdit={setShowEdit} />}
      {showDelete && <DeleteCustomer setShowDelete={setShowDelete} title={title} />}
    </AuthLayout>
  );
};
