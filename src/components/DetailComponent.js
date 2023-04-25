import React from "react";

function DetailComponent(props) {
  const [details, setDetails] = useState(null);
  const [feedbacks, setFeedbacks] = useState(null);

  useEffect(() => {
    // make API call to retrieve details data
    const fetchDetails = async () => {
      const response = await fetch(`/api/details?name=${props.name}`);
      const data = await response.json();
      setDetails(data);
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
      <h3>{details.creator}</h3>
      <p>{details.description}</p>
      <p>{details.price}</p>
      <button>Book Now</button>
      <h3>Feedbacks:</h3>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>
            <p>{feedback.comment}</p>
            <p>{feedback.rating}/5 stars</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetailComponent;
