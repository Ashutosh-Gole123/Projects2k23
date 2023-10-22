import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { Button } from "@mui/material";

function SignUp() {
  const { googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <Button
        onClick={handleGoogleSignIn}
        style={{
          background: "#CFD9F3",
          padding: "15px 30px 15px 30px",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        }}
      >
        SignIn With Google
      </Button>
    </div>
  );
}

export default SignUp;
