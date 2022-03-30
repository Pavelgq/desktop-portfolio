import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTargetWindowTitle } from "../../store/mainStore";

export const Resume = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTargetWindowTitle("Резюме-Гордеев.pdf"));
  }, []);

  return (
    <div>
      <h2>Резюме</h2>
      <section></section>
    </div>
  );
};
