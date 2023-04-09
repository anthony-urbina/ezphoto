interface StepperProps {
  quantity: number;
  updateStepperQuantity: (op: string, type: string) => void;
  type: string;
}
export const Stepper = ({
  quantity,
  updateStepperQuantity,
  type,
}: StepperProps) => {
  return (
    <div
      data-type="stepper"
      className="flex mt-4 mb-6 text-xl font-bold border border-black"
    >
      <button
        className="px-5 py-3 border-r border-black hover:bg-[#c9c3c3]"
        onClick={() => updateStepperQuantity("subtract", type)}
      >
        -
      </button>
      <button className="w-24 py-3 hover:bg-[#c9c3c3]">
        <p>{quantity}</p>
      </button>
      <button
        className="px-5 py-3 border-l border-black hover:bg-[#c9c3c3]"
        onClick={() => updateStepperQuantity("add", type)}
      >
        +
      </button>
    </div>
  );
};
