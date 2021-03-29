import React from "react";
import "./DownloadButton.css";

function DownloadButton({ id, type }) {
  return (
    <div className="download">
      <h2>Download {type === "mp3" ? "music" : "video"} file</h2>
      <iframe
        title="Download"
        className="button-api-frame"
        src={`https://www.yt-download.org/@api/button/${type}/${id}`}
        width="80%"
        height="40%"
        allowtransparency="true"
        scrolling="yes"
        style={{ border: "1px solid black", fontSize: "30px" }}
      />
    </div>
  );
}

export default DownloadButton;
