import { Link } from "react-router-dom";
import "./EventCard.css";

const EventCard = ({ id, _id, heading, date, location, img, onDelete }) => {
  const { year, month } = date;

  const handleDelete = async (e) => {
    e.preventDefault(); // Prevent navigation when clicking the delete button
    const confirmed = window.confirm("Are you sure you want to delete this event?");
    if (!confirmed) return;

    try {
      const response = await fetch(`https://event-management-system-backend-60dr.onrender.com/api/events/delete-event/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete the event");
      }

      // Notify parent or refresh the list
      if (onDelete) {
        onDelete(_id); // Pass the ID back to the parent for local state update
      }

      alert("Event deleted successfully!");
      window.location.reload()
    } catch (error) {
      console.error("Error deleting event:", error);
      alert("Failed to delete the event. Please try again.");
    }
  };

  return (
    <div className="card-wrapper">
      <Link to={`/events/${id}`} className="card-link">
        <div className="card">
          <div className="card-content">
            <h3>{heading}</h3>
            <p>
              <span>Year: {year}</span>
              <span>Month: {month}</span>
            </p>
            <p>{location}</p>
          </div>

          <div className="card-img-wrapper">
            <img src={img} alt="image not found" />
          </div>
        </div>
      </Link>

      {/* Delete Button */}
      <button className="delete-button" onClick={handleDelete}>
        <img src="recycle-bin.png" alt="delete" className="delete-icon"/>
      </button>
    </div>
  );
};

export default EventCard;
