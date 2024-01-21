/* eslint-disable quotes */
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./step-one.module.css";
import DoorSeriaes from "../components/door-seriaes";
import DoorSeriaResult from "../components/door-seria-result";

export default function StepOne({ selectedData }) {
  const arr = ["05", "04", "03", "02", "01"];
  return (
    <>
      <div className={styles.constr}>
        <ul className={styles.stepLadder}>
          {arr.map((step, index) => (
            <li
              className={
                step !== "01" ? styles.stepInactive : styles.stepActive
              }
              style={{ position: "relative", left: `calc(25px * ${index})` }}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            >
              {step !== "01" ? step : "шаг 1"}
            </li>
          ))}
        </ul>
        <p className={styles.subHeader}>Выберите свою серию</p>
        <div className={styles.pageContentWrapper}>
          <DoorSeriaes selectedData={selectedData} />
          <DoorSeriaResult />
        </div>
      </div>
      <div className={styles.links}>
        <NavLink to="/steptwo" className={styles.forwardLink}>
          Далее
        </NavLink>
      </div>
    </>
  );
}

