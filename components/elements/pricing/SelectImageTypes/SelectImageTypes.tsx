import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { ImageTypes } from "../../../pages";
import { usePrevious } from "../../../../custom-hooks";

interface SelectImageTypesProps {
  updateTypes: (selectedTypes: ImageTypes) => void;
}

export const SelectImageTypes = ({ updateTypes }: SelectImageTypesProps) => {
  const [isOn, setIsOn] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("");
  const prevSelectedType = usePrevious(selectedType);

  const toggleSwitch = () => {
    console.log("switch is:", !isOn);

    setIsOn(!isOn);
  };

  const handleSelectType = (
    event: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    const target = event.target as HTMLInputElement;
    const li = target.closest("li");
    if (!li) {
      console.error("no li found");
      return;
    }
    const { typeId } = li.dataset;
    console.log("typeId", typeId);
    if (typeId) {
      setSelectedType(typeId);
    }
  };

  const unhideQuantity = (type: string) => {
    if (type === selectedType && selectedType !== prevSelectedType) {
      console.log("prevSelectedType", prevSelectedType);
      return <div>Desired Number of Images</div>;
    } else {
      return <div>no moew</div>;
    }
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
              <input type="checkbox" id="standard" className="w-6 mr-2" />
              <label htmlFor="standard" className="text-[#807777]">
                Paired
              </label>
            </div>
            <AiOutlineInfoCircle size={24} color="#ababab" />
          </div>
          {unhideQuantity("0")}
        </li>
        <li
          data-type-id="1"
          className="flex items-center border-b border-[#c3cbcd] w-full justify-between px-4"
        >
          <div className="flex w-full py-4">
            <input type="checkbox" id="standard" className="w-6 mr-2" />
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
            <input type="checkbox" id="standard" className="w-6 mr-2" />
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
            <input type="checkbox" id="standard" className="w-6 mr-2" />
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
            <input type="checkbox" id="standard" className="w-6 mr-2" />
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
            <input type="checkbox" id="standard" className="w-6 mr-2" />
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
