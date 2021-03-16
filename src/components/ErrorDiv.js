function ErrorDiv({ errorTitle, errorYear }) {
  return (
    <div className="error">
      <ul>
        {errorTitle && <li>{errorTitle}</li>}
        {errorYear && <li>{errorYear}</li>}
      </ul>
    </div>
  );
}

export default ErrorDiv;
