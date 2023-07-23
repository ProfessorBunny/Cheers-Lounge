const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h4 style={{ textAlign: "center" }}>No Drinks found :(</h4>;
  }
  return <div>CocktailList</div>;
};
export default CocktailList;
