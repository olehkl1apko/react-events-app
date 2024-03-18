const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function fetchEvents() {
  const response = await fetch(BACKEND_URL + "/events");

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { events } = await response.json();

  return events;
}
