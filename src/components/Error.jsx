import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-container">
      <h1>Ooopss</h1>
      <h2>Something Wrong !!!</h2>
      <h3>
        {error.status} : {error.statusText}
      </h3>
      <h4>{error.data}</h4>
    </div>
  );
};

export default Error;
