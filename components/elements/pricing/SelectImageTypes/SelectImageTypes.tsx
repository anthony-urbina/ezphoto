import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { ImageTypes } from "../../../pages";
import { Stepper } from "../buttons";
interface SelectImageTypesProps {
  updateTypes: (selectedTypes: ImageTypes) => void;
  types: ImageTypes;
}

export const SelectImageTypes = ({
  updateTypes,
  types,
}: SelectImageTypesProps) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  // const [stepperQuantity, setStepperQuantity] = useState<number>(1);
  const imageTypes = [
    "Standard",
    "Paired",
    "Group",
    "Ghost mannequin",
    "Jewlery / Watches",
    "Hand model",
  ];
  const handleSelectType = (
    event: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    const target = event.target as HTMLInputElement;
    const div = target.closest("div");
    if (!div) {
      console.error("no div found");
      return;
    }

    if (div.dataset.type === "stepper") return;

    const li = target.closest("li");
    if (!li) {
      console.error("no li found");
      return;
    }
    const { typeId } = li.dataset;

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
            quantity={types[type]}
            type={type}
            updateStepperQuantity={updateStepperQuantity}
          />
        </div>
      );
    }
  };

  const updateStepperQuantity = (op: string, type: string) => {
    if (op === "add") updateTypes({ [type]: types[type] + 1 });
    if (op === "subtract" && types[type] !== 0)
      updateTypes({ [type]: types[type] - 1 });
  };

  const liFactory = (types: ImageTypes) => {
    const liList = Object.entries(types).map((type, index) => {
      const [id, quantity] = type;
      return (
        <li
          key={id}
          data-type-id={id.toString()}
          className={`flex items-center  px-4 flex-wrap ${
            index === imageTypes.length - 1 ? "" : "border-b border-[#c3cbcd]"
          }`}
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex w-full py-4">
              <input
                type="checkbox"
                id="standard"
                className="w-6 mr-2"
                checked={selectedTypes.includes(id.toString())}
              />
              <label htmlFor="standard" className="text-[#807777]">
                {imageTypes[Number(id)]}
              </label>
            </div>
            <AiOutlineInfoCircle size={24} color="#ababab" />
          </div>
          {toggleStepper(id.toString())}
        </li>
      );
    });
    return liList;
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
        {liFactory(types)}
      </ul>
    </div>
  );
};
