/* eslint-disable quotes */
import React from "react";
import { NavLink } from "react-router-dom";
import DoorSeriaResult from "../components/door-seria-result";
import styles from "./step-three.module.css";

export default function StepThree() {
  const arr = ["05", "04", "03", "02", "01"];
  return (
    <>
      <div className={styles.constr}>
        <ul className={styles.stepLadder}>
          {arr.map((step, index) => (
            <li
              className={
                step !== "03" ? styles.stepInactive : styles.stepActive
              }
              style={
                step < "03"
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
              {step !== "03" ? step : "шаг 3"}
            </li>
          ))}
        </ul>
        <div className={styles.pageContentWrapper}>
          <div />
          <DoorSeriaResult />
        </div>
      </div>
      <div className={styles.links}>
        <NavLink to="/steptwo">
          <div className={styles.backLink}>
            <div />
          </div>
        </NavLink>
        <NavLink to="/stepfour">
          <span className={styles.forwardLink}>Далее</span>
        </NavLink>
      </div>
    </>
  );
}
