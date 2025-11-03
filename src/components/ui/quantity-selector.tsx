"use client"

type QuantitySelectorProps = {
  quantity: number;
  limit: number;
  onChange: (newQty: number) => void;
};

export default function QuantitySelector({
  quantity,
  limit,
  onChange,
}: QuantitySelectorProps) {
  const handleIncrement = () => {
    const newQty = Math.min(limit, quantity + 1);
    onChange(newQty);
  };

  const handleDecrement = () => {
    const newQty = Math.max(0, quantity - 1);
    onChange(newQty);
  };
console.log(limit);


  return (
    <div className="flex justify-between items-center bg-gray-light w-full">
        <button onClick={handleDecrement} className="p-3 sm:py-3 sm:px-5 text-black/20 hover:bg-gray-300 transition font-semibold">-</button>
        <span className="px-4 font-medium">{quantity}</span>
        <button onClick={handleIncrement} className="p-3 sm:py-3 sm:px-5 text-black/20 hover:bg-gray-300 transition font-semibold">+</button>
    </div>
)
}
