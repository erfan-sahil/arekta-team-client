import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import { Exercise } from "./Exercise";
import { DietCard } from "./DietCard";

const componentName = (props) => {
  const userData = localStorage.getItem("userData");
  const storaData = JSON.parse(userData);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  console.log(userData);
  console.log(storaData);
  const dietObject = storaData.payload.plan.plan.meal_plan;
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold pb-4">Your plans for upcoming days,</h1>
        <h1 className="text-xl font-bold">Workout Plan</h1>
        <div className="items-center gap-4 grid grid-cols-3">
          {storaData.payload.plan.plan.workout_plan.exercises.map((exer) => (
            <Exercise exer={exer}></Exercise>
          ))}
        </div>

        <div className="mt-12">
          <h1 className="text-xl font-bold">Diet Plan</h1>
          <div className="">
            <div className="gap-4">
              <DietCard dietObject={dietObject}></DietCard>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  mt-20">
        <h1 className="text-xl font-bold text-start ">Upcomming</h1>
        <div className="flex items-center gap-8">
          {}
          <div>
            <Card className="mt-6 w-60">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Day 2
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>View</Button>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="mt-6 w-60">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Day 3
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button onClick={handleOpen}>View</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Diet Plans</DialogHeader>
        <DialogBody>
          Upcoming diet plans involve careful consideration of nutritional needs and goals. Whether aiming for weight loss,
          improved health, or performance enhancement, a well-balanced diet tailored to individual preferences and
          requirements is essential. Planning meals in advance, incorporating diverse food groups, and maintaining portion
          control are key strategies for success. Stay flexible and adaptable, making adjustments as needed to achieve
          sustainable results and overall well-being.
        </DialogBody>
        <DialogFooter>
          <Button variant="text" color="red" onClick={handleOpen} className="mr-1">
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default componentName;
