import { inputStyle } from "./index.css";

interface Props {
  text: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ text, onChange }: Props) {
  return (
    <input
      className={inputStyle}
      placeholder={"just do it"}
      onChange={onChange}
      value={text}
    />
  );
}
export default Input;
