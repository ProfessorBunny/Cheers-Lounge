import axios from "axios";
import { useLoaderData } from "react-router-dom";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
export const loader = async () => {
  const searchRecipe = "Mojito";
  const response = await axios.get(`${cocktailSearchUrl}${searchRecipe}`);

  return response;
};
const Landing = () => {
  const data = useLoaderData();
  console.log(data);
  return <h2>Landing</h2>;
};
export default Landing;
