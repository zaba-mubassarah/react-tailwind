import React from "react";
import CheckImage from "@/assets/images/icon/ck-white.svg";
const Checkbox = ({
  id,
  disabled,
  label,
  value,
  name,
  onChange,
  activeClass = " bg-valencia-700 dark:bg-slate-200 ",
}) => {
  return (
    <label
      className={`flex items-center ${
        disabled ? " cursor-not-allowed opacity-50" : "cursor-pointer"
      }`}
      id={id}
    >
      <input
        type="checkbox"
        className="hidden"
        name={name}
        checked={value}
        onChange={onChange}
        htmlFor={id}
        disabled={disabled}
      />
      <span
        className={`h-5 w-5 border flex-none border-slate-100 dark:border-slate-800 rounded-xl 
        inline-flex ltr:mr-3 rtl:ml-3 relative transition-all duration-150
        ${
          value
            ? activeClass
            : "bg-slate-100 dark:bg-slate-600 dark:border-slate-600"
        }
        `}
      >
        {value && (
          <img
            src={CheckImage}
            alt=""
            className="h-[10px] w-[10px] block m-auto"
          />
        )}
      </span>
      <span className="text-whiteddd-50 dark:text-slate-400 text-xs leading-6 capitalize">
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
