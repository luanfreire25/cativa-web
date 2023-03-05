import { useState, useEffect } from "react";

const useSizeScreen = () => {
  const initialState = {
    width: window.screen.width,
    height: window.screen.height,
  };

  const [size, setSize] = useState(initialState);

  const changeSize = () => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    setSize({ width, height });
  };

  useEffect(() => {
    changeSize();
    window.addEventListener("resize", changeSize);
  }, []);

  return size;
};

export default useSizeScreen;
