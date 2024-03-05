import { FaEdit, FaInfo, FaTrash } from "react-icons/fa";
import { Button } from "../Button";
import "./InventoryTable.css";

export const InventoryTable = ({
  data,
  setId,
  setShowEdit,
  setShowDelete,
  setTitle,
  fetching,
}) => {
  return (
    <div className="w-full h-[calc(100vh-58px-66px)] overflow-auto">
      <table>
        <thead className="sticky top-0">
          <tr>
            <th>#</th>
            <th>Part#</th>
            <th>QTY</th>
            <th>Unit Cost</th>
            <th>Margin</th>
            <th>Selling Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fetching && (
            <tr>
              <td colSpan={7}>Fetching Data...</td>
            </tr>
          )}
          {!fetching && data?.length < 1 && (
            <tr>
              <td colSpan={7}>No date found!</td>
            </tr>
          )}
          {data?.map((item, index) => (
            <tr
              style={
                parseFloat(item?.warn) >= parseFloat(item?.qty)
                  ? { background: "#900" }
                  : {}
              }
              key={index}
            >
              <td>{index + 1}</td>
              <td className="inline relative">
                {item?.part} <FaInfo className="info" />
                <div className="info-hover">{item?.description} - <span className="font-bold uppercase">{item?.added_by === 1 ? "admin" : "others"}</span></div>
              </td>
              <td>{item?.qty}</td>
              <td>{item?.unit}</td>
              <td>{item?.margin}</td>
              <td>{item?.selling}</td>
              <td className="table-actions">
                <Button
                  onClick={() => {
                    setId(item?.id);
                    setShowEdit(true);
                  }}
                >
                  <FaEdit />
                </Button>
                <Button
                  onClick={() => {
                    setId(item?.id);
                    setShowDelete(true);
                    setTitle(item.part);
                  }}
                >
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
