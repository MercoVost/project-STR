import { useParams } from "react-router-dom";

export const Details = () => {
  const { name } = useParams(); // Получаем параметр name

  return <div>Details for {name}</div>; // Отображаем имя страны
};
