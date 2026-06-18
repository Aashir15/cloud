import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function CustomSelect({
    options,
    value,
    onChange,
    name,
    placeholder,
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={ref}>
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="
          w-full h-14 px-5
          rounded-2xl
          border border-white/10
          bg-white/3
          text-left text-white
          flex items-center justify-between
          transition-all duration-300
          hover:bg-white/5
          focus:border-green-900
        "
            >
                <span className={value ? "text-white" : "text-white/40"}>
                    {value || placeholder}
                </span>

                <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${open ? "rotate-180" : ""
                        }`}
                />
            </button>

            {open && (
                <div
                    className="
    absolute z-50 mt-2 w-full
    rounded-2xl
    border border-white/10
    bg-[#111]
    backdrop-blur-xl
    shadow-xl
    max-h-64
    overflow-y-auto

    scrollbar-thin
    scrollbar-thumb-white/20
    scrollbar-track-transparent
  "
                >
                    {options.map((option) => (
                        <button
                            key={option}
                            type="button"
                            onClick={() => {
                                onChange({
                                    target: {
                                        name,
                                        value: option,
                                    },
                                });
                                setOpen(false);
                            }}
                            className="
                w-full px-5 py-3
                text-left text-white
                hover:bg-white/10
                transition-colors
              "
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}