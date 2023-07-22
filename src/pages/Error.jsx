import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="Page Not Found"></img>
          <h3>Sorry!!</h3>
          <p>Can't find the page you are looking for</p>
          <Link to="/">Redirect Back to Home Page</Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>Something went wrong</div>
    </Wrapper>
  );
};
export default Error;
