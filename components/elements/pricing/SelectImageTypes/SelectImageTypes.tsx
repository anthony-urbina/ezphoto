import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { ImageTypes } from "../../../pages";
import { Stepper } from "../buttons";
interface SelectImageTypesProps {
  updateTypes: (selectedTypes: ImageTypes) => void;
}

export const SelectImageTypes = ({ updateTypes }: SelectImageTypesProps) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [stepperQuantity, setStepperQuantity] = useState<number>(1);

  const handleSelectType = (
    event: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    const target = event.target as HTMLInputElement;
    const div = target.closest("div");
    if (!div) {
      console.error("no dive found");
      return;
    }

    if (div.dataset.type === "stepper") return;

    const li = target.closest("li");
    if (!li) {
      console.error("no li found");
      return;
    }
    const { typeId } = li.dataset;
    console.log("typeId", typeId);

    if (!typeId) {
      console.error("li is missing type id");
      return;
    }

    if (selectedTypes.includes(typeId)) {
      const copySelectedTypes = [...selectedTypes];
      for (let i = 0; i < copySelectedTypes.length; i++) {
        if (copySelectedTypes[i] === typeId) {
          copySelectedTypes.splice(i, 1);
        }
      }
      setSelectedTypes(copySelectedTypes);
    } else {
      const copySelectedTypes = [...selectedTypes];
      copySelectedTypes.push(typeId);
      setSelectedTypes(copySelectedTypes);
    }
  };

  const toggleStepper = (type: string) => {
    if (selectedTypes.includes(type)) {
      return (
        <div>
          <p>Desired Number of images</p>
          <Stepper
            quantity={stepperQuantity}
            updateStepperQuantity={updateStepperQuantity}
          />
        </div>
      );
    }
  };

  const updateStepperQuantity = (op: string) => {
    if (op === "add") setStepperQuantity(stepperQuantity + 1);
    if (op === "subtract" && stepperQuantity !== 0)
      setStepperQuantity(stepperQuantity - 1);
  };

  return (
    <div className="pt-8">
      <div className="flex items-center justify-between pb-4">
        <h3 className="text-2xl font-bold">SELECT IMAGE TYPES</h3>
      </div>
      <ul
        className="border border-[#c3cbcd] border-r-2 flex flex-col cursor-pointer"
        onClick={handleSelectType}
      >
        <li
          data-type-id="0"
          className="flex items-center border-b border-[#c3cbcd] px-4 flex-wrap"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex w-full py-4">
              <input
                type="checkbox"
                id="standard"
                className="w-6 mr-2"
                checked={selectedTypes.includes("0")}
              />
              <label htmlFor="standard" className="text-[#807777]">
                Paired
              </label>
            </div>
            <AiOutlineInfoCircle size={24} color="#ababab" />
          </div>
          {toggleStepper("0")}
        </li>
        <li
          data-type-id="1"
          className="flex items-center border-b border-[#c3cbcd] w-full justify-between px-4"
        >
          <div className="flex w-full py-4">
            <input
              type="checkbox"
              id="standard"
              className="w-6 mr-2"
              checked={selectedTypes.includes("1")}
            />
            <label htmlFor="standard" className="text-[#807777]">
              Standard
            </label>
          </div>
          <AiOutlineInfoCircle size={24} color="#ababab" />
        </li>
        <li
          data-type-id="2"
          className="flex items-center border-b border-[#c3cbcd] w-full justify-between px-4"
        >
          <div className="flex w-full py-4">
            <input
              type="checkbox"
              id="standard"
              className="w-6 mr-2"
              checked={selectedTypes.includes("2")}
            />
            <label htmlFor="standard" className="text-[#807777]">
              Group
            </label>
          </div>
          <AiOutlineInfoCircle size={24} color="#ababab" />
        </li>
        <li
          data-type-id="3"
          className="flex items-center border-b border-[#c3cbcd] w-full justify-between px-4"
        >
          <div className="flex w-full py-4">
            <input
              type="checkbox"
              id="standard"
              className="w-6 mr-2"
              checked={selectedTypes.includes("3")}
            />
            <label htmlFor="standard" className="text-[#807777]">
              Ghost mannequin
            </label>
          </div>
          <AiOutlineInfoCircle size={24} color="#ababab" />
        </li>
        <li
          data-type-id="4"
          className="flex items-center border-b border-[#c3cbcd] w-full justify-between px-4"
        >
          <div className="flex w-full py-4">
            <input
              type="checkbox"
              id="standard"
              className="w-6 mr-2"
              checked={selectedTypes.includes("4")}
            />
            <label htmlFor="standard" className="text-[#807777]">
              Jewelry / Watches
            </label>
          </div>
          <AiOutlineInfoCircle size={24} color="#ababab" />
        </li>
        <li
          data-type-id="5"
          className="flex items-center justify-between w-full px-4"
        >
          <div className="flex w-full py-4">
            <input
              type="checkbox"
              id="standard"
              className="w-6 mr-2"
              checked={selectedTypes.includes("5")}
            />
            <label htmlFor="standard" className="text-[#807777]">
              Hand Model
            </label>
          </div>
          <AiOutlineInfoCircle size={24} color="#ababab" />
        </li>
      </ul>
    </div>
  );
};
