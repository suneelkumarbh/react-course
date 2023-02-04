import Card from "../UI/Card";
import common_classes from "./Common.module.css";
import profile_classes from "./Profile.module.css";
const Profile = () => {
  return (
    <Card
      className={`${common_classes.card} ${profile_classes["profile-card"]}`}
    >
      <p>Profile of current user data here</p>
    </Card>
  );
};
export default Profile;
