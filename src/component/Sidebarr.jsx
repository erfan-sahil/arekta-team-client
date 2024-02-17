import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function Sidebarr() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="shadow-xl h-full rounded w-full max-w-[20rem] p-4 shadow-blue-gray-900/5">
      <List className="">
        <Link to="/myplans" className="flex items-center hover:bg-blue-gray-50 py-3 px-2 rounded-sm">
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          <p>My Plans</p>
        </Link>
        <Link to="/mycoach" className="flex items-center hover:bg-blue-gray-50 py-3 px-2 rounded-sm">
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          <p>My Coach</p>
        </Link>

        <Link to="/workoutAssistant" className="flex items-center hover:bg-blue-gray-50 py-3 px-2 rounded-sm">
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          <p>Workout Assistant</p>
        </Link>
      </List>
    </Card>
  );
}
