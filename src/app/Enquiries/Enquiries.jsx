'use-client'
import { useEnquiry } from "../Components/Enquiry";


const Enquiries = () => {
  const { enquiries } = useEnquiry();

  return (
    <div>
      <h1>My Enquiries</h1>
      {enquiries.length === 0 ? (
        <p>No paintings added yet.</p>
      ) : (
        <ul>
          {enquiries.map((painting, i) => (
            <li key={i}>
              {painting.title} - {painting.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Enquiries;
