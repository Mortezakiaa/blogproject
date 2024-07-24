import { InputProps } from "@/Types/Types";

const Input: React.FC<InputProps> = ({ onchange, onkeydown, value, title }) => {
  return (
    <div>
      <label htmlFor="title" className="block mb-2 text-lg font-semibold">
        {title}
      </label>
      <input
        type="text"
        value={value}
        id="title"
        onChange={onchange}
        onKeyDown={onkeydown}
        className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};
export default Input;
