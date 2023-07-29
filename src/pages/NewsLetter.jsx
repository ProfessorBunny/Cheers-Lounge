import { Form } from "react-router-dom";

export const action = async ({ request }) => {
  console.log(request);
  return null;
};

const NewsLetter = () => {
  return (
    <Form className="form" method="post">
      <h4 style={{ textAlign: "center", marginBottom: "2 rem" }}>
        Our Newsletter
      </h4>
      {/* {First Name} */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          defaultValue="Nikunj"
        />
      </div>
      {/* {Last Name} */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          defaultValue="Raghav"
        />
      </div>
      {/* {Email} */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-input"
          name="email"
          id="email"
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5 rem" }}
      >
        Submit
      </button>
    </Form>
  );
};
export default NewsLetter;
