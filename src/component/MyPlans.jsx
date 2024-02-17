import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Exercise } from "./Exercise";

const componentName = (props) => {


  const userData = localStorage.getItem('userData');
  const storaData = JSON.parse(userData)
  console.log(userData)
  console.log(storaData)

  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold pb-4">Your plans for today,</h1>
        <h1 className="text-xl font-bold">Workout Plan</h1>
        <div className="flex items-center gap-4">
        {storaData.payload.plan.plan.workout_plan.exercises.map(exer => <Exercise exer={exer}></Exercise>)}
          {/* <Card className="mt-6 w-72 pt-10">
            <CardHeader color="blue-gray" className="relative h-44">
              <img src="img/planks.jpg" className="h-full" alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
               
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Start Now</Button>
            </CardFooter>
          </Card>
          <Card className="mt-6 w-72 pt-10">
            <CardHeader color="blue-gray" className="relative h-44">
              <img src="img/pushup.png" className="h-full" alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Planks
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Start Now</Button>
            </CardFooter>
          </Card>
          <Card className="mt-6 w-72 pt-10">
            <CardHeader color="blue-gray" className="relative h-44">
              <img src="img/squats.jpg" className="h-full" alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Squats
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Start Now</Button>
            </CardFooter>
          </Card> */}
        </div>

        <div className="mt-12">
          <h1 className="text-xl font-bold">Diet Plan</h1>
          <div className="flex items-center gap-4">
            <Card className="mt-6 w-72 pt-10">
              <CardHeader color="blue-gray" className="relative h-44">
                <img
                  src="img/br.png"
                  className="h-full w-full"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Breakfast
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2
                  min
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Start Now</Button>
              </CardFooter>
            </Card>
            <Card className="mt-6 w-72 pt-10">
              <CardHeader color="blue-gray" className="relative h-44">
                <img
                  src="img/ln.png"
                  className="h-full w-full"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Planks
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2
                  min
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Start Now</Button>
              </CardFooter>
            </Card>
            <Card className="mt-6 w-72 pt-10">
              <CardHeader color="blue-gray" className="relative h-44">
                <img
                  src="img/dn.png"
                  className="h-full w-full"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Squats
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2
                  min
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button>Start Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex flex-col  mt-20">
        <h1 className="text-2xl font-medium text-start ">Upcomming</h1>
        <div className="flex items-center gap-8">
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
                <Button>View</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default componentName;
