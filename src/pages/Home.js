import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axios";
import { useAppData } from "../App";
import { BsQuestionDiamondFill } from "react-icons/bs";

function Home() {
  const [question, setQuestion] = useState([]);
  const [noQuestion, setNoQuestion] = useState();

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const { state, dispatch } = useAppData();
  const token = localStorage.getItem("token");

  const fetchQuestions = async () => {
    try {
      const { data } = await axios.get("/question", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setQuestion(data.questions);
    } catch ({ response }) {
      localStorage.setItem("token", "");
      dispatch({
        type: "LOGOUT",
      });
      navigate("/");
      console.log(response.data);
    }
  };

  useEffect(() => {
    if (question.length === 0) {
      setNoQuestion("no questions found");
    }
    if (search === "") {
      fetchQuestions();
    } else {
      const newQuestions = question.filter((el) => {
        return el.title.toLowerCase().includes(search.toLowerCase());
      });
      setQuestion(newQuestions);
    }
  }, [search]);

  useEffect(() => {
    fetchQuestions();
    if (question.length === 0) {
      setNoQuestion("no questions found");
    }
  }, []);

  return (
    <div className="bg-gray-200 py-20 pb-32 px-20 ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <Link to={"/ask"}>
            <button className="btn btn-primary bg-blue-700 text-white px-5 py-3 rounded-md">
              Ask Question
            </button>
          </Link>
          <div className="pt-2 md:pt-0 loged-user text-2xl">
            Welcome: <span className="text-blue-600 text-2xl">{state.user}</span>
          </div>
        </div>
        {/* search start */}
        <div className="search-control mb-6">
          <input
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="search question"
            className="bg-white outline-none w-4/5 py-2 px-4 border border-gray-300 rounded text-gray-700 font-mono"
          />
        </div>
        {/* search start */}
        {/* all question */}
        <div>
          {question.length === 0 ? (
            <p className="text-center text-2xl text-gray-700 capitalize">
              {noQuestion}
            </p>
          ) : (
            <>
              {question.map((el, i) => {
                const { title, username, questionid } = el;
                return (
                  <Link key={i} to={`/question/${questionid}`}>
                    <div className="flex flex-row items-center question border-b py-4 hover:bg-gray-200 transition duration-300 ease-in-out">
                      <div className="w-1/6 md:w-1/12">
                        <div className="avatar flex justify-center items-center">
                          <FaUser />
                        </div>
                      </div>
                      <div className="w-5/6 md:w-11/12">
                        <p className="font-cursive text-lg md:text-xl">
                          {title}
                        </p>
                        <p className="text-gray-500">{username}</p>
                      </div>
                      <div className="w-1/12">
                        <div className="angle">
                        <BsQuestionDiamondFill size={40} />
                        </div>
                      </div>
                    </div>
                    
                  </Link>
                  
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
