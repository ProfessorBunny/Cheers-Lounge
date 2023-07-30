import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";
const SearchFrom = ({ searchedDrink }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  console.log(searchedDrink);
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          style={{ textTransform: "capitalize" }}
          defaultValue={searchedDrink}
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {" "}
          {isSubmitting ? "Searching..." : "Search"}
        </button>
      </Form>
    </Wrapper>
  );
};
export default SearchFrom;
