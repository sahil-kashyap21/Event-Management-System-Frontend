import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateEvent.css";

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    heading: "",
    date: {
      year: "",
      month: "",
    },
    location: "",
    description: "",
    img: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // Handle changes in the form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "year" || name === "month") {
      setEventData((prevData) => ({
        ...prevData,
        date: {
          ...prevData.date,
          [name]: value,
        },
      }));
    } else {
      setEventData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the date and other required fields
    if (!eventData.heading || !eventData.date.year || !eventData.date.month || !eventData.location || !eventData.description) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/events/create-event`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const newEvent = await response.json();
        window.location.href = `/events/${newEvent.id}`;
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="create-event-container">
      <h2>Create New Event</h2>
      {error && <p className="error-message">{error}</p>} {/* Error message is displayed if there is an error */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Event Name</label>
          <input
            type="text"
            name="heading"
            value={eventData.heading}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Event Date</label>
          <input
            type="number"
            name="year"
            value={eventData.date.year}
            onChange={handleChange}
            placeholder="Year"
            required
          />
          <input
            type="text"
            name="month"
            value={eventData.date.month}
            onChange={handleChange}
            placeholder="Month"
            required
          />
        </div>

        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label>Image URL</label>
          <input
            type="text"
            name="img"
            value={eventData.img}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Create Event</button>
      </form>
    </div>

  );
};

export default CreateEvent;
