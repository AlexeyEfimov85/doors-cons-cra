/* eslint-disable quotes */
import React from "react";
import { NavLink } from "react-router-dom";
import DoorSeriaResult from "../components/door-seria-result";
import styles from "./step-four.module.css";

export default function StepFour() {
  const arr = ["05", "04", "03", "02", "01"];
  return (
    <>
      <div className={styles.constr}>
        <ul className={styles.stepLadder}>
          {arr.map((step, index) => (
            <li
              className={
                step !== "04" ? styles.stepInactive : styles.stepActive
              }
              style={
                step < "04"
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
              {step !== "04" ? step : "шаг 4"}
            </li>
          ))}
        </ul>
        <div className={styles.pageContentWrapper}>
          <div />
          <DoorSeriaResult />
        </div>
      </div>
      <div className={styles.links}>
        <NavLink to="/stepthree">
          <div className={styles.backLink}>
            <div />
          </div>
        </NavLink>
        <NavLink to="/stepfive">
          <span className={styles.forwardLink}>Далее</span>
        </NavLink>
      </div>
    </>
  );
}
