import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>The User Id is {id}</h1>
    </div>
  );
};

export default User;
