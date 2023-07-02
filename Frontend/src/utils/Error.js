import ErrorImage from "/public/images/404 Error.jpg";
import { useRouteError, Link } from "react-router-dom"; // import useRouteError for routing error

const Error = () => {
  // call useRouteError so we can access error data while routing
  const err = useRouteError();
  return (
    <div className="error-page" style={{
      alignItems: 'center'}}>
      <img src={ErrorImage} alt="Error Image" />
      <h1>Oops! Something went wrong.</h1>
      <h6 className="error-data">{err.data}</h6>
      <h6 className="error-back-home">
        <Link to="/">Back Home</Link>
      </h6>
    </div>
  );
};

export default Error;