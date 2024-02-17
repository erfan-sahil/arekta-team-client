import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import BreakFastCard from "./BreakfastCard";
import LunchCard from "./LunchCard";
import DinnerCard from "./DinnerCard";
import SnacksCard from "./SnacksCard";

export function DietCard({ dietObject }) {
  console.log(dietObject);
  return (
    <div className="grid grid-cols-3">
      <Card className="mt-6 w-72 p-5">
        <h1 className="font-semibold text-xl my-2">BreakFast</h1>
        {dietObject.breakfast.map((bf) => (
          <BreakFastCard bf={bf}></BreakFastCard>
        ))}
      </Card>
      <Card className="mt-6 w-72 p-5">
        <h1 className="font-semibold text-xl my-2">Lunch</h1>
        {dietObject.lunch.map((ln) => (
          <LunchCard ln={ln}></LunchCard>
        ))}
      </Card>
      <Card className="mt-6 w-72 p-5">
        <h1 className="font-semibold text-xl my-2">Dinner</h1>
        {dietObject.dinner.map((dn) => (
          <DinnerCard dn={dn}></DinnerCard>
        ))}
      </Card>
      <Card className="mt-6 w-72 p-5">
        <h1 className="font-semibold text-xl my-2">Snacks</h1>
        {dietObject.snacks.map((sn) => (
          <SnacksCard sn={sn}></SnacksCard>
        ))}
      </Card>
    </div>
  );
}
