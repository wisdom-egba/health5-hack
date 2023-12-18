import { useState } from "react";
import styles from "../../styles/Home.module.css";
export default function PrivatePage(props) {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  // const clearUploadedFile = (event) => {
  //   if (event.target.files && event.target.files[0]) {
  //     event.target.files = null;
  //     const i = event.target.files;

  //     setImage(i);
  //     setCreateObjectURL(URL.createObjectURL(i));
  //   }
  // };

  // const uploadToServer = async (event) => {
  //   const body = new FormData();
  //   // console.log("file", image)
  //   body.append("file", image);
  //   const response = await fetch("/api/upload", {
  //     method: "POST",
  //     body,
  //   });
  // };

  return (
    <div>
      <div>
        <img src={createObjectURL} />
        <h4 className={styles.textColor}>Upload File</h4>
        <input
          type="file"
          name="myImage"
          onChange={uploadToClient}
          className={styles.textColor}
        />
        {/* <button
          className="btn btn-primary"
          type="submit"
          onClick={clearUploadedFile}
        >
          clear
        </button> */}
      </div>
    </div>
  );
}
