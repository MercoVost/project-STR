import { useLocation } from "react-router-dom";

export const NotFound = () => {
  let location = useLocation();
  console.log("NotFound" + location.pathname);
  return <div>This page doesn't exist</div>;
};
