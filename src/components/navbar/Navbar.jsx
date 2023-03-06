import global_colors from "@/styles/global_colors";
import Word from "../logo/Word";
import { useSizeScreen } from "@/hooks/useSizeScreen";

const Navbar = () => {
  const { width, height } = useSizeScreen();

  return (
    <div
      style={{
        background: `${global_colors.PRIMARY_COLOR}`,
        textAlign: "center",
        padding: "12px",
      }}
    >
      <Word
        size={width <= 375 ? "25px" : "30px"}
        color={"#fff"}
        colorShadow={"#c9c9c9"}
      />
    </div>
  );
};

export default Navbar;
