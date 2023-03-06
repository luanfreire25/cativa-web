import style from "@/components/styles_components/Title.module.css";
import global_colors from "@/styles/global_colors";
import { useSizeScreen } from "@/hooks/useSizeScreen";

const SectionTitle = ({ firstLine, secondLine, colorSL }) => {
  const { width, height } = useSizeScreen();

  return (
    <>
      <div className={style.sectionTitle}>
        <span
          style={{
            color: `${global_colors.PRIMARY_COLOR}`,
            fontSize: `${width <= 375 ? "13px" : "16px"}`,
          }}
        >
          {firstLine}
        </span>
        <br />
        <span
          style={{
            color: `${colorSL}`,
            fontSize: `${width <= 375 ? "18px" : "23px"}`,
          }}
        >
          {secondLine}
        </span>
      </div>
    </>
  );
};

export default SectionTitle;
