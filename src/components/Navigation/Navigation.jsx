import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/find-events">Find Events</Link>
        </li>
        <li>
          <Link to="/create-event">Create Event</Link> {/* Link to Create Event */}
        </li>
        <li>
          <Link to="/contact">Contact</Link> {/* Adding link to Contact page */}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
