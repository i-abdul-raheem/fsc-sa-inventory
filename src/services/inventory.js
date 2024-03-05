import { supabase } from "./supabase";

const addItem = async (json) => {
  const { data, error } = await supabase
    .from("inventory")
    .insert([json])
    .select();
  if (error) {
    return { status: 400, message: error.details };
  }
  return { status: 201, data: data[0], message: "Item added." };
};

const updateItem = async (json, id) => {
  const { data, error } = await supabase
    .from("inventory")
    .update(json)
    .eq("id", id)
    .select();
  if (error) {
    return { status: 400, message: error.details };
  }
  return { status: 200, data: data[0], message: "Item updated." };
};

const deleteItem = async (id) => {
  const { error } = await supabase.from("inventory").delete().eq("id", id);
  if (error) {
    return { status: 400, message: error.details };
  }
  return { status: 200, message: "Item deleted." };
};

const getData = async () => {
  const { data } = await supabase
    .from("inventory")
    .select("*")
    .order("id", { ascending: false });
  return data;
};

const getSingleData = async (id) => {
  const { data } = await supabase.from("inventory").select("*").eq("id", id);
  return data?.[0];
};

export const InventoryService = {
  addItem,
  getData,
  getSingleData,
  updateItem,
  deleteItem,
};
