const apiUrl = 'https://event-management-system-backend-60dr.onrender.com/api/events/';

// Function to fetch and export the event list
export const fetchEventList = async () => {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data; // The event list
  } catch (error) {
    console.error('Error fetching event list:', error);
    return []; // Return an empty array in case of an error
  }
};

// Immediately fetch and export the event list
export const eventList = await fetchEventList();
