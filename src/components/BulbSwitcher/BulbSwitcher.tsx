import "./BulbSwitcher.css";
const BulbSwitcher = ({ changingTheme, setChangingTheme }: any) => {
  return (
    <>
      <input
        className="l"
        type="checkbox"
        onChange={() => {
          if (changingTheme === "light") {
            setChangingTheme("dark");
          } else {
            setChangingTheme("light");
          }
        }}
        checked={changingTheme === "light"}
      />
    </>
  );
};

export default BulbSwitcher;
