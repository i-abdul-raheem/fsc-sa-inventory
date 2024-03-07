import { FaEdit, FaTrash } from "react-icons/fa";
import { Button } from "../Button";

export const CustomersTable = ({ setShowEdit, setShowDelete }) => {
  return (
    <div className="w-full h-[calc(100vh-58px-66px)] overflow-auto">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Company</th>
            <th>Contact Person</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>VAT#</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Devster Labs</td>
            <td>Abdul Raheem</td>
            <td>Islamabad, PK</td>
            <td>+923134386826</td>
            <td>abdul.raheem@devsterlabs.com</td>
            <td>12345</td>
            <td className="inline">
              <Button onClick={() => setShowEdit(true)}>
                <FaEdit />
              </Button>
              <Button onClick={() => setShowDelete(true)}>
                <FaTrash />
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
