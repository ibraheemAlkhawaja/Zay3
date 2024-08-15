import { useState } from "react";

const useInput = () => {
  const [formData, setformData] = useState({});
  const handelChange = (domObj) => {
    const [name, value] = domObj;
    setformData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(formData);
  };
  return [formData, handelChange];
};

export default useInput;
