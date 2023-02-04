import { json, redirect } from "react-router-dom";
import Signup from "../components/User/Signup";

const SignupPage = () => {
  return <Signup />;
};
export default SignupPage;

export const action = async ({ request }) => {
  const data = await request.formData();
  const response = await fetch(
    "https://react-http-b8814-default-rtdb.firebaseio.com/users.json",
    {
      method: "POST",
      body: JSON.stringify({
        first_name: data.get("first_name"),
        last_name: data.get("last_name"),
        email: data.get("email"),
        password: data.get("password"),
      }),
    }
  );

  if (!response.ok) {
    throw json({ message: "Could not create user" }, { status: 500 });
  }
  return redirect("/")
};
