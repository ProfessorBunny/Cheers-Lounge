import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchFrom from "../components/SearchFrom";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const saearchedDrink = url.searchParams.get("search") || "Gin";
  const response = await axios.get(`${cocktailSearchUrl}${saearchedDrink}`);

  return { drinks: response.data.drinks, saearchedDrink };
};

const Landing = () => {
  const { drinks, searchedDrink } = useLoaderData();
  // console.log(searchedDrink);
  return (
    <>
      <SearchFrom />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
