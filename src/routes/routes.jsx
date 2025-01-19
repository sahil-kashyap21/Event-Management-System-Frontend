import EventList from "../pages/EventList/EventList"
import FilterEvents from "../pages/FilterEvents/FilterEvents"
import EventDetail from "../pages/EventDetails/EventDetails";
import Contact from "../pages/Contact/Contact"; // Importing Contact component
import CreateEvent from "../pages/EventCreate/CreateEvent";

export const routes = [
  { path: '/', element: <EventList /> },
  { path: '/find-events', element: <FilterEvents /> },
  { path: '/events/:id', element: <EventDetail /> },
  { path: '/create-event', element: <CreateEvent /> }, // Ensure this route is added
  { path: '/contact', element: <Contact /> },
];