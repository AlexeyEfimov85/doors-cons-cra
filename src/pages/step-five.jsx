/* eslint-disable quotes */
import React from "react";
import { NavLink } from "react-router-dom";
import DoorSeriaResult from "../components/door-seria-result";
import styles from "./step-five.module.css";

export default function StepFive() {
  const arr = ["05", "04", "03", "02", "01"];
  return (
    <>
      <div className={styles.constr}>
        <ul className={styles.stepLadder}>
          {arr.map((step, index) => (
            <li
              className={
                step !== "05" ? styles.stepInactive : styles.stepActive
              }
              style={
                step < "05"
                  ? {
                    position: "relative",
                    left: `calc(25px * ${index})`,
                    backgroundColor: "#D2EAC9",
                    zIndex: `calc(8 / ${index})`,
                    color: "#3AB50E",
                  }
                  : { position: "relative", left: `calc(25px * ${index})` }
              }
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            >
              {step !== "05" ? step : "шаг 5"}
            </li>
          ))}
        </ul>
        <div className={styles.pageContentWrapper}>
          <div />
          <DoorSeriaResult />
        </div>
      </div>
      <div className={styles.links}>
        <NavLink to="/stepfour">
          <div className={styles.backLink}>
            <div />
          </div>
        </NavLink>
        <NavLink to="/result">
          <span className={styles.forwardLink}>Далее</span>
        </NavLink>
      </div>
    </>
  );
}
