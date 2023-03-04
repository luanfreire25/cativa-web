import style from "@/components/styles_components/Title.module.css";
import global_colors from "@/styles/global_colors";

const SectionTitle = ({ firstLine, secondLine, colorSL }) => {
  return (
    <>
      <div className={style.sectionTitle}>
        <span style={{ color: `${global_colors.PRIMARY_COLOR}` }}>
          {firstLine}
        </span>
        <br />
        <span style={{ color: `${colorSL}`, fontSize: "23px" }}>
          {secondLine}
        </span>
      </div>
    </>
  );
};

export default SectionTitle;
