import { useState } from "react";
import { Selector } from "./DropdownMenuStyle";

const DropdownMenu = ({ onOptionChange }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    onOptionChange(value); // Call the onOptionChange prop with the selected value
  };

  return (
    <>
      <Selector value={selectedOption} onChange={handleOptionChange}>
        <option value="doctors">Doctors</option>
        <option value="patients">Patients</option>
      </Selector>
    </>
  );
};

export default DropdownMenu;
