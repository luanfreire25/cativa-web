import IconButton from "@mui/material/IconButton";
import global_colors from "@/styles/global_colors";

const RedeSocial = ({ icone, link }) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        style={{ textDecoration: "none !important" }}
      >
        <IconButton
          style={{
            background: `${global_colors.PRIMARY_COLOR}`,
            color: `${global_colors.SECONDARY_COLOR}`,
          }}
          aria-label="upload picture"
          component="label"
        >
          {icone}
        </IconButton>
      </a>
    </>
  );
};

export default RedeSocial;
