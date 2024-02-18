import {
  Textarea,
  input,
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import apiRequest from "../utils/apiRequest";
import { useNavigate } from "react-router-dom";

const componentName = (props) => {
  const navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);

  const [questionnaire, setQuestionnaire] = useState([
    {
      question: "What is your main fitness goal for workout?",
      answers: [""],
      isMCQ: true,
      isMultiAnswers: false,
      options: ["Build muscle", "Burn fat", "Improve cardiovascular health", "Increase flexibility"],
    },
    {
      question: "What is your preferred workout intensity?",
      answers: [""],
      isMCQ: true,
      isMultiAnswers: false,
      options: ["Low-intensity", "Moderate-intensity", "High-intensity"],
    },
    {
      question: "How much time do you have for your workout today?",
      answers: [""],
      isMCQ: true,
      isMultiAnswers: false,
      options: ["15-20 minutes", "30-45 minutes", "60+ minutes"],
    },
    {
      question: "What is your current fitness level?",
      answers: [""],
      isMCQ: true,
      isMultiAnswers: false,
      options: ["Beginner", "Intermediate", "Advanced"],
    },
    {
      question: "Do you have any preferences for specific exercise types?",
      answers: [""],
      isMCQ: true,
      isMultiAnswers: false,
      options: ["Cardio only", "Strength training only", "Mix of cardio and strength training"],
    },
    {
      question: "How Many Days Per Week do you plan to exercise?",
      answers: [""],
      isMCQ: true,
      isMultiAnswers: false,
      options: ["3 days", "5 days", "7 days"],
    },
    {
      question: "What is your preferred workout environment?",
      answers: [""],
      isMCQ: true,
      isMultiAnswers: false,
      options: ["At Home", "Gym", "Outdoors"],
    },
    {
      question: "What Motivates you to stick to your workout routine?",
      answers: [""],
      isMCQ: true,
      isMultiAnswers: false,
      options: [
        "Want to see physical change in my Body",
        "To Achieve Personal Goals and Milestones",
        "Enjoying the process and feeling energized after workouts",
      ],
    },
    {
      question: "Are You More interested in -",
      answers: [""],
      isMCQ: true,
      isMultiAnswers: false,
      options: ["Losing Weight", "Building Muscle", "Improving Overall Fitness & health"],
    },
    {
      question: "Do you have any dietary restrictions or allergies? (Select all that apply)",
      answers: [""],
      isMCQ: true,
      isMultiAnswers: true,
      options: ["Vegetarian", "Vegan", "Gluten-free", "Dairy-free", "Nut allergies"],
    },
    {
      question: "How would you describe your current eating habits? (Select one)",
      answers: [""],
      isMCQ: true,
      isMultiAnswers: false,
      options: [
        "Healthy and balanced",
        "Mostly healthy, with occasional indulgences",
        "Convenient and processed foods",
        "Inconsistent with frequent changes",
      ],
    },
    {
      question: "How much time are you willing to dedicate to meal preparation each week?",
      answers: [""],
      isMCQ: true,
      isMultiAnswers: false,
      options: [
        "Minimal time, prefer quick and easy meals",
        "Some time, open to preparing simple meals",
        "Enjoy cooking and can dedicate more time to meal prep",
        "Flexible, depending on the recipe",
      ],
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState([]);

  const handleAnswerChange = (event) => {
    const updatedQuestionnaire = [...questionnaire];
    const currentQuestion = updatedQuestionnaire[currentQuestionIndex];

    if (currentQuestion.isMCQ) {
      const selectedOptions = currentQuestion.answers;
      const value = event.target.value;

      const index = selectedOptions.indexOf(value);
      if (index === -1) {
        selectedOptions.push(value);
      } else {
        selectedOptions.splice(index, 1);
      }
    } else {
      currentQuestion.answers = event.target.value;
    }

    setQuestionnaire(updatedQuestionnaire);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionnaire.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowSpinner(true);
      const payload = {
        userId: "abc123",
        preference: questionnaire,
      };
    }
  };

  // console.log("result", result);
  const handlePrevQuestion = () => {
    if (currentQuestionIndex < questionnaire.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      console.log("All questions answered:", questionnaire);
    }
  };

  return (
    <div className="flex flex-col  bg-white py-20 px-40 ">
      {result.success === true ? (
        <div>
          <div className="gap-4 mt-5">
            <h1 className="text-xl font-semibold "> Primary Goals</h1>
            <h1 className=" font-medium"> {result?.payload?.plan?.goals?.primary_goal}</h1>
          </div>

          <div className="gap-4">
            <h1 className="text-xl font-semibold mt-5"> Secondary Goals</h1>
            <p>
              {result?.payload?.plan?.goals?.secondary_goals?.map((goal) => (
                <ul className=" font-medium"> {goal}</ul>
              ))}
            </p>
          </div>

          <div className="mt-5">
            <h1 className="text-xl font-semibold mt-5"> Preference</h1>

            <div className="gap-3">
              <p className="text-lg font-medium">Activity Level</p>
              <p className=" font-normal">{result?.payload?.plan?.preferences?.activity_level}</p>
            </div>

            <div className="mt-5">
              <p className="text-xl font-semibold mt-5">Diet Plan</p>

              <div className="flex gap-3 mt-2">
                <p className="text-lg font-semibold">Preferences : </p>
                <p className="">{result?.payload?.plan?.preferences?.diet?.preferences}</p>
              </div>
              <div className=" gap-3 mt-2">
                <p className="text-lg font-semibold">Time Commitment : </p>
                <p className="">{result?.payload?.plan?.preferences?.diet?.time_commitment}</p>
              </div>
              <div className=" gap-3 mt-2">
                <p className="text-lg font-semibold">Restrictions :</p>
                <p className="">
                  {result?.payload?.plan?.preferences?.diet?.restrictions?.map((res) => (
                    <ul className="text-lg font-medium"> {res} </ul>
                  ))}
                </p>
              </div>
            </div>

            <div className="mt-2">
              <h1 className="text-xl font-semibold">Equipment :</h1>
              <div>
                <div className="flex gap-3">
                  <p className="">
                    {result?.payload?.plan?.preferences?.diet?.restrictions?.map((res) => (
                      <ul className="text-lg font-medium"> {res} </ul>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full">
          {currentQuestionIndex < questionnaire.length ? (
            <div className="">
              <p className="text-black text-3xl font-medium">{questionnaire[currentQuestionIndex].question}</p>
              <div>
                {questionnaire[currentQuestionIndex].isMCQ ? (
                  <div className=" w-full">
                    {/* {console.log(questionnaire[currentQuestionIndex].options)} */}
                    {questionnaire[currentQuestionIndex].options.map((q) => (
                      <ListItem className="p-0 flex flex-col">
                        <label htmlFor="vertical-list-react" className="flex w-full cursor-pointer items-center px-5 py-3">
                          <ListItemPrefix className="mr-3">
                            <Checkbox
                              type="checkbox"
                              className="text-black text-xl font-medium my-3 "
                              value={q}
                              name="answer"
                              onChange={handleAnswerChange}
                              checked={questionnaire[currentQuestionIndex].answers.includes(q)}
                              id="vertical-list-react"
                              ripple={false}
                              containerProps={{
                                className: "p-0",
                              }}
                            />
                          </ListItemPrefix>
                          <Typography color="blue-gray" className="font-normal">
                            {q}
                          </Typography>
                        </label>
                      </ListItem>
                      // <div className="flex items-center">
                      //   <input
                      //     type="checkbox"
                      //     className="text-black text-3xl font-medium my-3 mx-3"
                      //     value={q}
                      //     name="answer"
                      //     onChange={handleAnswerChange}
                      //     checked={questionnaire[
                      //       currentQuestionIndex
                      //     ].answers.includes(q)}
                      //   />
                      //   <p>{q}</p>
                      // </div>
                    ))}
                  </div>
                ) : (
                  <Textarea
                    type="text"
                    value={questionnaire[currentQuestionIndex].answers}
                    onChange={handleAnswerChange}
                    className="h-10 rounded-sm p-3 text-black bg-white text-lg"
                    variant="static"
                    placeholder="answer"
                  />
                )}
              </div>
              <div className="text-end ">
                <button
                  className="text-black border mr-3 hover:bg-blue-gray-50 border-black font-semibold rounded-md py-2 px-4 my-4"
                  onClick={handlePrevQuestion}
                >
                  Prev
                </button>
                <button
                  className=" border bg-blue-gray-800 hover:bg-blue-gray-900 text-white border-black font-semibold rounded-md py-2 px-4 my-4"
                  onClick={handleNextQuestion}
                >
                  Next
                </button>
              </div>
              {showSpinner == true ? (
                <div className="flex gap-1">
                  <span>Preparing your Plans...</span>
                  <Spinner />
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <div>
              <h2>Answers:</h2>
              <ul>
                {questionnaire.map((answers, index) => (
                  <li key={index}>
                    {questions[index]}: {answers}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default componentName;
