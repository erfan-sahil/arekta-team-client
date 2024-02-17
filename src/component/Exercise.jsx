import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";

export function Exercise({ exer }) {
  console.log(exer);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <Card className="mt-6 w-72 pt-5">
      <div className="mt-2 flex gap-2 px-4">
        <Typography className="font-semibold text-lg">Day:</Typography>
        <Typography className="text-lg font-semibold">{exer.day}</Typography>
      </div>
      <div className="pt-10">
        <CardHeader color="blue-gray" className="relative h-40 w-64">
          <img
            src={`https://placehold.co/600x380/white/black?text=${exer.type.toUpperCase()}`}
            alt="card-image"
            className="object-fill"
          />
        </CardHeader>
        <CardBody className="flex flex-col">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {exer.description}
          </Typography>
          <div className="mt-2 flex gap-2">
            <Typography className="font-semibold">Duration:</Typography>
            <Typography>{exer.duration}</Typography>
          </div>
          <div className="mt-2 flex gap-2">
            <Typography className="font-semibold">Reps:</Typography>
            <Typography>{exer.reps}</Typography>
          </div>
          <div className="mt-2 flex gap-2">
            <Typography className="font-semibold">Sets:</Typography>
            <Typography>{exer.sets}</Typography>
          </div>
          <div className="mt-2 flex gap-2">
            <Typography className="font-semibold">Type:</Typography>
            <Typography>{exer.type.toUpperCase()}</Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={handleOpen}>Start Exercise</Button>
        </CardFooter>
      </div>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Start Exercise</DialogHeader>
        <DialogBody>
          Starting an exercise routine is about setting achievable goals,
          choosing activities you enjoy, and listening to your body.
          Consistency, patience, and support from a community are key. Embrace
          the journey with kindness towards yourself, celebrating progress along
          the way.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Card>
  );
}
