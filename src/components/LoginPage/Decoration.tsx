import pattern from "../../assets/Login/pattern.png";

const Decoration = () => {
  return (
    <img
      src={pattern}
      className="w-[800px] absolute bottom-0 left-0 "
      style={{ zIndex: -1 }}
    />
  );
};

export default Decoration;
