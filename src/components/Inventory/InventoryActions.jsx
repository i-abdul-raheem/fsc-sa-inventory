import { FaPlus } from "react-icons/fa";
import { Button } from "../Button";
import { Input } from "../Input";
import { AddInventoryItem } from "./AddInventoryItem";
import { useInventory } from "../../hooks";
import { useEffect, useState } from "react";
import { EditInventoryItem } from "./EditInventoryItem";

export const InventoryActions = ({
  data,
  setData,
  warn,
  setWarn,
  part,
  setPart,
  qty,
  setQty,
  unit,
  setUnit,
  selling,
  margin,
  setMargin,
  addItem,
  updateItem,
  description,
  setDescription,
  loading,
  setLoading,
  id,
  showEdit,
  setShowEdit,
}) => {
  const { showAdd, setShowAdd } = useInventory();
  const [search, setSearch] = useState("");
  const searchItems = () => {
    const temp = [...data];
    setData(
      [...temp].filter((item) => {
        return Object.values(item)
          ?.map((i) => i?.toString()?.toLowerCase())
          ?.join("")
          ?.includes(search?.toLowerCase());
      })
    );
  };
  useEffect(() => {
    if (search && search?.length > 0) {
      searchItems();
    } else {
      setData([...data]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  return (
    <div className="flex justify-between items-center">
      <h2 className="ps-3 font-thin text-2xl uppercase">Inventory</h2>
      <div className="p-3 flex items-center justify-end gap-3">
        <Input
          title={"Search Inventory"}
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder={"Search..."}
        />
        <Button
          onClick={() => {
            setShowAdd(true);
          }}
          className={"py-3"}
          title={"Add Item"}
        >
          <FaPlus />
        </Button>
        {showAdd && (
          <AddInventoryItem
            setShowAdd={setShowAdd}
            warn={warn}
            setWarn={setWarn}
            part={part}
            setPart={setPart}
            qty={qty}
            setQty={setQty}
            unit={unit}
            setUnit={setUnit}
            selling={selling}
            margin={margin}
            setMargin={setMargin}
            addItem={addItem}
            description={description}
            setDescription={setDescription}
            loading={loading}
          />
        )}
        {showEdit && (
          <EditInventoryItem
            setShowAdd={setShowAdd}
            warn={warn}
            setWarn={setWarn}
            part={part}
            setPart={setPart}
            qty={qty}
            setQty={setQty}
            unit={unit}
            setUnit={setUnit}
            selling={selling}
            margin={margin}
            setMargin={setMargin}
            updateItem={updateItem}
            description={description}
            setDescription={setDescription}
            loading={loading}
            id={id}
            setShowEdit={setShowEdit}
            setLoading={setLoading}
          />
        )}
      </div>
    </div>
  );
};
