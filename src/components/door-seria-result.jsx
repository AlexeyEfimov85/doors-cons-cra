import React from "react";
import styles from "./door-seria-result.module.css";
import { useSelector } from "react-redux";

export default function DoorSeriaResult() {
  const seria = useSelector((store) => store.setCurrentSeriaReducer);
  console.log(seria);
  return (
    <div className={styles.seriaResultWrapper}>
      <div
        className={styles.container}
        style={{
          width: 360,
          height: 360,
          borderRadius: 180,
          backgroundColor: "#FFFFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={seria.seria} alt={seria.name} style={{
          width: 150,
          height: 303,
        }}/>
      </div>
    </div>
  );
}
