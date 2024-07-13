import { TSelect } from "@/types/TSelect";

type TMySelect = {
  data: TSelect[];
  placeholder: string;
  setData?: React.Dispatch<React.SetStateAction<string>>;
  value?: string;
  label?: string;
  size?: boolean;
};
const MySelect = ({
  label,
  value,
  data,
  placeholder,
  setData,
  size,
}: TMySelect) => {
  return (
    <select
    required={size}
      defaultValue={value}
      onChange={(e) => setData && setData(e.target.value)}
      name={label}
      className={`bg-gray-50 border ${
        size ? "w-full" : "md:max-w-60"
      } border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-textColor focus:border-textColor block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
    >
      <option selected disabled value={""} key={placeholder}>
        {placeholder}
      </option>
      {data.map((item) => (
        <option
          value={item?.value || item?.name}
          className="capitalize"
          key={item.name}
        >
          {item?.title || item?.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
