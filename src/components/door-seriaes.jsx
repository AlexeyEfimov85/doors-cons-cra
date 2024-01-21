import React from "react";
import styles from "./door-seriaes.module.css";
import { useDispatch } from "react-redux";
import { SET_SERIA } from "../services/actions/set-seria";

export default function DoorSeriaes({ selectedData }) {
  const dispatch = useDispatch();
  const onClick = (item) => {
    console.log(item)
    dispatch({
      type: SET_SERIA,
      seria: item,
    });
  }
  return (
    <>
      {selectedData && (
        <div className={styles.seriaWrapper}>
          {selectedData.map((listItem, index) => (
            <div onClick = {() => onClick(listItem)} key={index}>
              <img src={listItem.previewimg} alt={listItem.name} />
              <p className={styles.seriaName}>{listItem.name}</p>
              <p className={styles.seriaDescr}>{listItem.descr}</p>
              <span className={styles.seriaPrice}>{listItem.price}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

