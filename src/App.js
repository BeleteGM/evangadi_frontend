import { createContext, useContext, useEffect, useReducer } from "react";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header.js";
import NotFound from "./components/NotFound.js";
import Ask from "./pages/Ask.js";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import Answer from "./pages/Answer.js";
import { Routes, Route, useNavigate } from "react-router-dom"; // Import useNavigate
import ProtectedRoute from "./pages/ProtectedRoute.js";

import { reducer } from "./context/reducer.js";
import Loading from "./components/Loading.js";

import axios from "./axios.js";

const AppProvider = createContext();
export const useAppData = () => useContext(AppProvider);

function App() {
  const navigate = useNavigate(); // Define navigate using useNavigate()

  const initialState = {
    user: "",
    loading: false,
    alert: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const checkUser = async () => {
    const token = localStorage.getItem("token");
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get("/user/check", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response && response.data) {
        const { data } = response;
        dispatch({ type: "SET_USER", payload: data.username });
      } else {
        // Handle the case where response or response.data is undefined
        console.log("Response or response.data is undefined");
      }
    } catch (error) {
      // Handle other errors here
      console.log("Error:", error);
      localStorage.setItem("token", "");
      dispatch({ type: "LOGOUT" });
      navigate("/"); // Use navigate here
    }
  };

  useEffect(() => {
    if (!state.user) {
      checkUser();
    }
  }, [state.user, navigate]); // Add navigate to the dependency array

  return (
    <AppProvider.Provider value={{ state, dispatch }}>
      <Header />
      {state.loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<About />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ask"
            element={
              <ProtectedRoute>
                <Ask />
              </ProtectedRoute>
            }
          />
          <Route
            path="/post-answer"
            element={
              <ProtectedRoute>
                <Answer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/question/:id"
            element={
              <ProtectedRoute>
                <Answer />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
      <Footer />
    </AppProvider.Provider>
  );
}

export default App;
