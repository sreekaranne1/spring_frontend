import React from "react";

function DetailComponent() {
  const url = window.location.pathname; // get the current URL path
  const id = url.substring(url.lastIndexOf('/') + 1);
  const [details, setDetails] = useState(null);
  const [feedbacks, setFeedbacks] = useState(null);

  useEffect(() => {
    // make API call to retrieve details data

    const fetchDetails = async () => {
      const res = await fetch(`localhost:8080/api/touristspot/${id}`);
      const data1 = await response.json();
      setDetails(data1);
      const response = await fetch(`/api/details?name=${props.name}`);
      const data = await response.json();
      setFeedbacks(data)
      
    };
    fetchDetails();

    // make API call to retrieve feedback data
    const fetchFeedbacks = async () => {
      const response = await fetch(`/api/feedbacks?name=${props.name}`);
      const data = await response.json();
      setFeedbacks(data);
    };
    fetchFeedbacks();
  }, [props.name]);

  if (!details || !feedbacks) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{details.name}</h1>
      <h2>{details.location}</h2>
      
      <p>{details.description}</p>
      <p>{details.price}</p>
      <h3>{details.user.firstName}</h3>
      <button>Book Now</button>
      <h3>Feedbacks:</h3>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>
            <h3>{feedback.email}</h3>
            <p>{feedback.FeedBack}</p>
            <p>{feedback.rating}/5 stars</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetailComponent;
