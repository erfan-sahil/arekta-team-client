import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import apiRequest from "../utils/apiRequest";

const componentName = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  console.log(searchValue);

  const searchHandler = () => {
    apiRequest
      .post("/chats/create", searchValue)
      .then((res) => {
        setResult(res.data);
      })
      .catch((error) => console.error(error));
  };

  console.log(result);
  return (
    <div className="h-full w-full p-10">
      <div className="flex justify-between w-full items-center">
        <div>
          <p className="font-bold text-xl">Personal Coach</p>
        </div>
        <div>
          <p className="font-semibold text-lg my-2">Personality</p>
          <div className="flex items-center gap-4">
            <Select label="Select Personality">
              <Option>David Goggins</Option>
              <Option>Calm</Option>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center mt-20">
        <div>
          <ListItem>
            { result ? 
            <div>
            <Typography variant="h6" color="blue-gray">
              Coach
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {result}
            </Typography>
          </div>
          :
          <div></div>
            }

          </ListItem>
        </div>
      </div>

      <div className="flex justify-center mt-48">
        <form className="relative flex w-2/3" onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Search"
            name="search"
            value={searchValue}
            onChange={handleChange}
            className="pr-20"
          />
          <Button
            size="sm"
            className="absolute right-1 top-1 rounded bg-blue-gray-900 text-white"
            type="submit"
            onClick={searchHandler}
          >
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};

export default componentName;
