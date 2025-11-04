import { CheckCircleIcon, Circle, CircleDot } from "lucide-react";
import { FaCircle } from "react-icons/fa";

export function StyledRadioGroup({
  options,
  value,
  onChange,
}: Readonly<{
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  name: string;
}>) {
    console.log(value);
    
  return (
    <div className="flex flex-col gap-5 justify-between w-full " >
      {options.map((opt) => (
        
        <button
        type="button"
        onClick={() => onChange(opt.value)}
          key={opt.value}
          className={`'cursor-pointer text-sm transition-all duration-200 flex justify-start gap-3 items-center w-full font-semibold mt-1 p-3 md:p-5 border rounded-md focus:ring-primary focus:border-primary outline-none',
            ${value === opt.value
              ? ' border-primary font-semibold text-black'
              : ' text-black/40 border-[#CFCFCF] hover:border-primary'
          }`}
        >
            <span className=" border border-[#CFCFCF] rounded-full flex justify-center items-center w-6 h-6">
                {value === opt.value && <FaCircle className={`w-3 h-3 ${value === opt.value ? 'text-primary': ''}` }/>}
            </span>
        
        {opt.label}
          
        </button>
      ))}
    </div>
  );
}
