import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchFrom from "../components/SearchFrom";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const searchedDrink = url.searchParams.get("search") || "Gin";
  const response = await axios.get(`${cocktailSearchUrl}${searchedDrink}`);

  return { drinks: response.data.drinks, searchedDrink };
};

const Landing = () => {
  const { drinks, searchedDrink } = useLoaderData();
  // console.log(searchedDrink);
  return (
    <>
      <SearchFrom searchedDrink={searchedDrink} />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
