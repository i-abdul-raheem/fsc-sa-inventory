import { useContext, useEffect, useState } from "react";
import { InventoryService } from "../services";
import { UiContext } from "../context";

export const useInventory = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  // DATA
  const [warn, setWarn] = useState(0);
  const [part, setPart] = useState("");
  const [qty, setQty] = useState("");
  const [description, setDescription] = useState("");
  const [unit, setUnit] = useState("");
  const [margin, setMargin] = useState("");
  const [selling, setSelling] = useState("");

  const { setToast, setToastMsg } = useContext(UiContext);
  const addItem = async (e) => {
    e.preventDefault();
    setLoading(true);
    const temp_data = {
      part,
      warn,
      qty,
      description,
      unit,
      margin,
      selling,
      added_by: JSON.parse(localStorage.getItem("@token"))?.id,
    };
    const res = await InventoryService.addItem(temp_data);
    setToastMsg(res.message);
    setToast(true);
    setLoading(false);
    if (res.status === 201) {
      setData([...data, res.data]);
      // Reset Data
      setWarn(0);
      setPart("");
      setQty("");
      setDescription("");
      setUnit("");
      setMargin("");
      setSelling("");

      const closeBtn = document.getElementById("close-add-inventory");
      if (closeBtn) {
        setTimeout(() => {
          closeBtn.click();
        }, 100);
      }
    }
  };
  const deleteItem = async (e, id) => {
    e.preventDefault();
    setLoading(true);
    const res = await InventoryService.deleteItem(id);
    setToastMsg(res.message);
    setToast(true);
    setLoading(false);
    if (res.status === 200) {
      setData([...data].filter((i) => parseInt(i?.id) !== parseInt(id)));
    }
    setShowDelete(false);
  };
  const updateItem = async (e, id) => {
    e.preventDefault();
    setLoading(true);
    const temp_data = {
      part,
      warn,
      qty,
      description,
      unit,
      margin,
      selling,
      added_by: JSON.parse(localStorage.getItem("@token"))?.id,
    };
    const res = await InventoryService.updateItem(temp_data, id);
    setToastMsg(res.message);
    setToast(true);
    setLoading(false);
    if (res.status === 200) {
      setData(
        [...data].map((i) => {
          if (i?.id === id) {
            return res.data;
          }
          return i;
        })
      );
      // Reset Data
      setWarn(0);
      setPart("");
      setQty("");
      setDescription("");
      setUnit("");
      setMargin("");
      setSelling("");

      const closeBtn = document.getElementById("close-edit-inventory");
      if (closeBtn) {
        setTimeout(() => {
          closeBtn.click();
        }, 100);
      }
    }
  };
  useEffect(() => {
    setSelling(parseFloat(unit) + parseFloat(margin) || 0);
  }, [unit, margin]);
  useEffect(() => {
    setFetching(true);
    InventoryService.getData().then((res) => {
      setData([...res]);
      setFetching(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {
    warn,
    setWarn,
    part,
    setPart,
    description,
    setDescription,
    unit,
    setUnit,
    margin,
    setMargin,
    selling,
    setSelling,
    qty,
    setQty,
    addItem,
    showAdd,
    setShowAdd,
    loading,
    data,
    showEdit,
    setShowEdit,
    setLoading,
    updateItem,
    showDelete,
    setShowDelete,
    deleteItem,
    fetching,
  };
};
