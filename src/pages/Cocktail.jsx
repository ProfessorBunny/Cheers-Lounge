import { useLoaderData, Link } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";
const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  return { data, id };
};

const Cocktail = () => {
  const { id, data } = useLoaderData();
  const dataForSingleDrink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
    strAlcoholic: info,
  } = dataForSingleDrink;
  return <Wrapper>Cocktail</Wrapper>;
};
export default Cocktail;
