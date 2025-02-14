import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
  }
  return null;
};

const NewsLetter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2 rem" }}>
        Our Newsletter
      </h4>
      {/* {First Name} */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          // required
          placeholder="Nikunj"
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
          // required
          id="lastName"
          placeholder="Raghav"
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
          // required
          defaultValue="test@test.com"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5 rem" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting" : "Submit"}
      </button>
    </Form>
  );
};
export default NewsLetter;
