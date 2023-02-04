import { redirect } from "react-router-dom";
import Login from "../components/User/Login";

const LoginPage = () => {
  return <Login />;
};
export default LoginPage;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const response = await fetch(
    "https://react-http-b8814-default-rtdb.firebaseio.com/users.json"
  );
  const data = await response.json();
  const user_id = await Object.keys(data).filter(
    (key) =>
      data[key]["email"] === formData.get("email") &&
      data[key]["password"] === formData.get("password")
  );

  if (user_id.length === 1) {
    return redirect("/");
  }
};
