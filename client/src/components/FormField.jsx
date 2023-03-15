import React from "react";

const FormField = ({
  LabelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name}>{LabelName}</label>

        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
          >
            Surprise Me
          </button>
        )}
      </div>

      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="w-full outline-none  border bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg block p-3 
        focus:ring-[#4649ff] 
        focus:border-[#4649ff]
        "
      />
    </div>
  );
};

export default FormField;
