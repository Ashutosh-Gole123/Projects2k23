import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Signin from "./components/Signin";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
function App() {
  const [value, setValue] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    const storedPhotoURL = sessionStorage.getItem("photoURL");

    if (storedEmail) {
      setValue(storedEmail);
      navigate("/");
    }

    if (storedPhotoURL) {
      setPhotoURL(storedPhotoURL);
    } else {
      // Redirect to signup page if no user is logged in
      if (!storedEmail) {
        navigate("/signup");
      }
    }
  }, [navigate]);
  return (
    <>
      <Routes>
        {!value && <Route path="/signup" element={<Signin />} />}
        {value && (
          <Route
            path="/"
            element={
              <>
                <Header value={value} photoURL={photoURL} />
                <Home />
              </>
            }
          />
        )}
      </Routes>
    </>
  );
}

export default App;
