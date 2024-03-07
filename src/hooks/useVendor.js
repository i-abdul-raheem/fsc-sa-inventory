import { useState } from "react";

export const useVendor = () => {
  const [title, setTitle] = useState(undefined);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [id, setId] = useState(undefined);
  const [loading, setLoading] = useState(false);

  return {
    title,
    setTitle,
    showAdd,
    setShowAdd,
    showEdit,
    setShowEdit,
    showDelete,
    setShowDelete,
    id,
    setId,
    loading,
    setLoading,
  };
};
