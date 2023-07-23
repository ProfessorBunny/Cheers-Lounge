import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";
const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h4 style={{ textAlign: "center" }}>No Drinks found :(</h4>;
  }
  const formattedDrinks = drinks.map((drink) => {
    // const { idDrink, strAlcoholic, strDrinkThumb, strGlass, strDrink } = drink;
    return {
      id: drink.idDrink,
      name: drink.strDrink,
      info: drink.strAlcoholic,
      glass: drink.strGlass,
      image: drink.strDrinkThumb,
    };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};
export default CocktailList;
