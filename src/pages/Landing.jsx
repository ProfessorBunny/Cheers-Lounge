import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchFrom from "../components/SearchFrom";
import { useQuery } from "@tanstack/react-query";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchDrinkQuery = (searchedDrink) => {
  return {
    queryKey: ["search", searchedDrink || "Gin"],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchedDrink}`);
      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchedDrink = url.searchParams.get("search") || "Gin";
    // const response = await axios.get(`${cocktailSearchUrl}${searchedDrink}`);
    await queryClient.ensureQueryData(searchDrinkQuery(searchedDrink));

    return { searchedDrink };
  };

const Landing = () => {
  const { searchedDrink } = useLoaderData();
  const { data: drinks } = useQuery(searchDrinkQuery(searchedDrink));

  return (
    <>
      <SearchFrom searchedDrink={searchedDrink} />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
