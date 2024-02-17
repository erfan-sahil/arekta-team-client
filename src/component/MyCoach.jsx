import React from "react";
import { Button, Input } from "@material-tailwind/react";
import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";

const componentName = (props) => {
  return (
    <div className="h-full w-full p-10">
      <div className="flex justify-between w-full items-center">
        <div>
          <p className="font-bold text-xl">Personal Coach</p>
        </div>
        <div>
          <p className="font-semibold text-lg">Personality</p>
          <div className="flex items-center gap-4">
            <Button>David Goggins</Button>
            <Button>Calm</Button>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center mt-20">
        <div>
          <ListItem>
            <ListItemPrefix>
              <Avatar
                variant="circular"
                alt="candice"
                src="https://docs.material-tailwind.com/img/face-1.jpg"
              />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
                Tania Andrew
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Software Engineer @ Material Tailwind
              </Typography>
            </div>
          </ListItem>
        </div>
      </div>

      <div className="flex justify-center mt-32">
        <div className="relative flex w-2/3">
          <Input
            type="text"
            label="Search"
            // value={}
            // onChange={onChange}
            className="pr-20"
          />
          <Button
            size="sm"
            className="!absolute right-1 top-1 rounded bg-blue-gray-900 text-white"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default componentName;
