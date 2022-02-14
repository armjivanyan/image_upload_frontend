import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Gallery from "./components/gallery/Gallery";
import Upload from "./components/upload/Upload";
import Image from "./components/image/Image";
import BackButton from "./components/backButton/BackButton";

function App() {
  const [uploadResponse, setUploadResponse] = useState(null);
  const [urls, setUrls] = useState(null);

  useEffect(() => {
    fetch("/api/all")
      .then((response) => response.json())
      .then((data) => data.links)
      .then((data) => JSON.parse(data))
      .then((data) => setUrls(data));
  }, [uploadResponse]);

  return (
    <div className="container-fluid">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Upload
                uploadResponse={uploadResponse}
                setUploadResponse={setUploadResponse}
              ></Upload>
              <Gallery urls={urls}></Gallery>
            </>
          }
        />
        <Route
          path="/:name"
          element={
            <>
              <BackButton />
              <Image />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
