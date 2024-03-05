import { useEffect, useState } from "react";
import {
  DeleteInventoryItem,
  InventoryActions,
  InventoryTable,
} from "../components";
import { useInventory } from "../hooks";
import { AuthLayout } from "../layouts";

export const Inventory = () => {
  const {
    data,
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
    description,
    setDescription,
    loading,
    setShowEdit,
    showEdit,
    setLoading,
    updateItem,
    setShowDelete,
    showDelete,
    deleteItem,
    fetching
  } = useInventory();
  const [tempData, setTempData] = useState(data);
  const [id, setId] = useState(null);
  const [title, setTitle] = useState(null);
  useEffect(() => {
    setTempData([...data]);
  }, [data]);
  return (
    <AuthLayout>
      <InventoryActions
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
        updateItem={updateItem}
        description={description}
        setDescription={setDescription}
        loading={loading}
        data={data}
        setData={setTempData}
        id={id}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        setLoading={setLoading}
      />
      <InventoryTable
        data={tempData}
        setId={setId}
        setShowEdit={setShowEdit}
        setShowDelete={setShowDelete}
        setTitle={setTitle}
        fetching={fetching}
      />
      {showDelete && (
        <DeleteInventoryItem
          deleteItem={deleteItem}
          loading={loading}
          id={id}
          setShowDelete={setShowDelete}
          title={title}
        />
      )}
    </AuthLayout>
  );
};
