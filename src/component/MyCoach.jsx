import React, { useEffect, useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { List, ListItem, ListItemPrefix, Avatar, Card, Typography, Spinner } from "@material-tailwind/react";
import apiRequest from "../utils/apiRequest";

const componentName = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState([]);
  const [selectedPersonality, setSelectedPersonality] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);

  const handleChange = (event) => {
    setSearchValue(event?.target?.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  console.log(searchValue);

  const searchHandler = () => {
    const payload = {
      msg: result,
      question: searchValue,
    };
    setShowSpinner(true);
    setSearchValue("");
    apiRequest
      .post("/chats/goggins", payload)
      .then((res) => {
        setShowSpinner(false);
        setResult(res.data.payload.msg);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const payload = {
      msg: result,
    };

    apiRequest
      .post("/chats/goggins", payload)
      .then((res) => {
        setResult(res.data.payload.msg);
      })
      .catch((error) => console.error(error));
  }, []);

  const HandleSelectChange = (event) => {
    setSelectedPersonality(event.target.value);
  };

  console.log(selectedPersonality);
  return (
    <div className="h-full w-full p-10">
      <div className="flex justify-between w-full items-center">
        <div>
          <p className="font-bold text-xl">Personal Coach</p>
        </div>
        <div>
          <p className="font-semibold text-lg my-2">Personality</p>
          <div className="flex items-center gap-4">
            <Select label="Select Personality" onChange={HandleSelectChange} value={selectedPersonality}>
              <Option name="David Goggins" value="David Goggins">
                David Goggins
              </Option>
              <Option name="Calm" value="Calm">
                Calm
              </Option>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center mt-20">
        <div>
          {result.map((c) => {
            if (c.role === "system") {
              return <div></div>;
            }

            return (
              <ListItem>
                <div>
                  <Typography variant="h6" color="blue-gray">
                    {c.role === "assistant" ? "Coach" : "You"}
                  </Typography>
                  <Typography variant="small" color="gray" className="font-normal">
                    {c.content}
                  </Typography>
                </div>
              </ListItem>
            );
          })}
        </div>
      </div>
      {showSpinner == true ? (
        <div className="ml-4 text-center">
          <Spinner />
        </div>
      ) : (
        ""
      )}

      <div className="flex justify-center mt-48">
        <form className="relative flex w-2/3" onSubmit={handleSubmit}>
          <Input type="text" label="Chat" name="search" value={searchValue} onChange={handleChange} className="pr-20" />
          <Button
            size="sm"
            className="absolute right-1 top-1 rounded bg-blue-gray-900 text-white"
            type="submit"
            onClick={searchHandler}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default componentName;
