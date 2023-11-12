import { useState, useEffect } from "react";

type Props = { endRate: number; index: number; children: any };
const ProgressProvider = ({ endRate, index, children }: Props) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(0);
  }, [endRate]);
  useEffect(() => {
    setValue(0);
    setTimeout(() => {
      setValue(endRate);
    }, 300);
  }, [index]);
  return children(value);
};
export default ProgressProvider;
