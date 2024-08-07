import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Details = () => {
  const { name } = useParams(); // Получаем параметр name
  let location = useLocation();
  console.log("Details" + location.pathname);

  return <div>Details for {name}</div>; // Отображаем имя страны
};
