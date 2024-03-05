import { useEffect } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { InventoryService } from "../../services";

const Row = ({ className, children }) => (
  <div
    className={
      "flex w-full gap-1 items-center justify-center mb-1 " + className
    }
  >
    {children}
  </div>
);

export const EditInventoryItem = ({
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
  updateItem,
  description,
  setDescription,
  loading,
  id,
  setShowEdit,
  setLoading,
}) => {
  useEffect(() => {
    if (id) {
      setWarn(0);
      setPart("Loading...");
      setQty("Loading...");
      setUnit("Loading...");
      setMargin("Loading...");
      setDescription("Loading...");
      setLoading(true);
      InventoryService.getSingleData(id).then((res) => {
        setWarn(res?.warn);
        setPart(res?.part);
        setQty(res?.qty);
        setUnit(res?.unit);
        setMargin(res?.margin);
        setDescription(res?.description);
        setLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#00000066] flex items-center justify-center z-50">
      <form
        onSubmit={(e) => {
          updateItem(e, id);
        }}
        className="relative w-full max-w-[280px] p-3 bg-secondary rounded-lg"
      >
        <Row>
          <Input
            required={true}
            disabled={loading}
            className={"w-full"}
            placeholder={"Part #"}
            name={"part"}
            id={"part"}
            value={part}
            onChange={(e) => setPart(e.target.value)}
          />
          <Input
            required={true}
            disabled={loading}
            className={"w-full"}
            placeholder={"QTY"}
            name="qty"
            id="qty"
            type="number"
            value={qty}
            min={0}
            onChange={(e) => setQty(e.target.value)}
          />
        </Row>
        <textarea
          placeholder="Item Description"
          className={
            "w-full border border-secondary active:border-primary bg-light rounded-md text-white px-3 py-2 "
          }
          name="description"
          disabled={loading}
          id="description"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <Row>
          <Input
            required={true}
            disabled={loading}
            className={"w-full"}
            placeholder={"Unit Cost"}
            type="number"
            step="0.01"
            value={unit}
            min={0}
            onChange={(e) => setUnit(e.target.value)}
          />
          <Input
            required={true}
            disabled={loading}
            className={"w-full"}
            placeholder={"Margin"}
            type="number"
            step="0.01"
            value={margin}
            min={0}
            onChange={(e) => setMargin(e.target.value)}
          />
        </Row>
        <Input
          required={true}
          disabled={loading}
          className={"w-full"}
          placeholder={"Selling Price"}
          type="number"
          step="0.01"
          value={selling}
          readOnly={true}
        />
        <div className={"flex items-center justify-start gap-3 py-3 px-1"}>
          <label>Warn at:</label>
          <input
            type="range"
            name=""
            id="warn"
            value={warn}
            min={0}
            disabled={loading}
            max={qty || 0}
            onChange={(e) => setWarn(e.target.value)}
          />
          <span>{warn}</span>
        </div>
        <div className={"flex items-center gap-2 py-3 justify-end"}>
          <Button
            type="button"
            disabled={loading}
            id="close-edit-inventory"
            onClick={() => setShowEdit(false)}
            className={"bg-light "}
          >
            Cancel
          </Button>
          <Button disabled={loading} type="submit">
            {loading ? "Updating..." : "Update Item"}
          </Button>
        </div>
      </form>
    </div>
  );
};
