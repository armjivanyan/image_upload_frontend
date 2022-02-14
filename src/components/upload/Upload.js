import React, { useRef } from "react";

const Upload = ({ uploadResponse, setUploadResponse }) => {
  const inputEl = useRef(null);

  const setAlertType = () => {
    if (uploadResponse === "Something went wrong...") {
      return "alert-danger";
    }
    return "alert-success";
  };

  const uploadImage = (img) => {
    const myHeaders = new Headers();
    myHeaders.append("content", "image/jpeg");
    myHeaders.append("Content-Type", "image/jpeg");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: img,
      redirect: "follow",
    };

    fetch("/api/upload", requestOptions)
      .then((response) => response.json())
      .then((result) => setUploadResponse(result.message))
      .catch((error) => setUploadResponse("Something went wrong..."));
  };

  return (
    <div className="row">
      <div className="col-12 mb-3">
        <button
          className="btn btn-primary btn-block uploadBtn"
          onClick={() => inputEl.current.click()}
        >
          Upload
        </button>
        <label htmlFor="formFile" className="form-label">
          Upload you image here (max 1MB)
        </label>
        <input
          style={{ display: "none" }}
          ref={inputEl}
          className="form-control"
          type="file"
          id="formFile"
          onChange={(event) => uploadImage(event.target.files[0])}
        />
        {uploadResponse ? (
          <div className={`alert ${setAlertType()}`}>
            <h6>{uploadResponse}</h6>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Upload;
