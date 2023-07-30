import axios from "axios";
import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchFrom from "../components/SearchFrom";
import { useQuery } from "@tanstack/react-query";
const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchDrinksQuery = (searchedDrink) => {
  return {
    queryKey: ["search", searchedDrink || "gin"],
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
    const searchedDrink = url.searchParams.get("search") || "gin";
    // const response = await axios.get(`${cocktailSearchUrl}${searchedDrink}`);
    await queryClient.ensureQueryData(searchDrinksQuery(searchedDrink));

    return { searchedDrink };
  };

const Landing = () => {
  const { searchedDrink } = useLoaderData();
  const { data: drinks } = useQuery(searchDrinksQuery(searchedDrink));

  return (
    <>
      <SearchFrom searchedDrink={searchedDrink} />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
