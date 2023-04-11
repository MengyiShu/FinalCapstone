import Select from "react-select";

function weaponSelect() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return <Select options={options} />;
}

export default weaponSelect;
