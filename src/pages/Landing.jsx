import axios from "axios";
import { useLoaderData } from "react-router-dom";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const saearchedDrink = "Mojito";
  const response = await axios.get(`${cocktailSearchUrl}${saearchedDrink}`);

  return { drinks: response.data.drinks, saearchedDrink };
};

const Landing = () => {
  const { drinks, searchedDrink } = useLoaderData();
  console.log(drinks);
  console.log(searchedDrink);
  return <h2>Landing</h2>;
};
export default Landing;
