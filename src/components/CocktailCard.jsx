import Wrapper from "../assets/wrappers/CocktailCard";
import { Link } from "react-router-dom";
const CocktailCard = ({ id, name, info, glass, image }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          {" "}
          Detail
        </Link>
      </div>
    </Wrapper>
  );
};
export default CocktailCard;
