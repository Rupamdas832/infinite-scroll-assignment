import "./ErrorBox.css";

const ErrorBox = () => {
  return (
    <div className="error-container">
      <p>Error. It might be due to CORS error.</p>
      <p>
        Please try <b>CORS chrome extension</b> to run...
      </p>
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
  );
};

export default ErrorBox;
