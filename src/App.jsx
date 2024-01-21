import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styles from "./app.module.css";
import StepOne from "./pages/step-one";
import StepTwo from "./pages/step-two";
import StepThree from "./pages/step-three";
import StepFour from "./pages/step-four";
import StepFive from "./pages/step-five";
import { data } from "./data";

function App() {
  const location = useLocation();
  const [checked, setChecked] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const checkboxRef = useRef();
  useEffect(() => {
    if (checked) {
      setSelectedData(data.filter((element) => element.type === "House"));
    } else {
      setSelectedData(data.filter((element) => element.type === "Flat"));
    }
  }, [checked]);
  const onCheck = () => {
    if (checkboxRef.current.checked) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };
  return (
    <>
      <header className={styles.header}>Хедер</header>
      <main className={styles.main}>
        <h1 className={styles.mainHeader}>Конструктор двери</h1>
        <div>
          <div className={styles.slogan}>
            <p className={styles.selectDoorTypeText}>
              Создайте входную дверь Torex на свой вкус:
            </p>
            {location.pathname === "/" ? (
              <label className={styles.toggle} htmlFor="checkbox">
                <span
                  className={
                    checked
                      ? styles.togglelabeldisabled
                      : styles.togglelabelactivated
                  }
                >
                  в квартиру
                </span>
                <input
                  className={styles.togglecheckbox}
                  type="checkbox"
                  id="checkbox"
                  ref={checkboxRef}
                  onChange={onCheck}
                />
                <div className={styles.toggleswitch} />
                <span
                  className={
                    checked
                      ? styles.togglelabelactivated
                      : styles.togglelabeldisabled
                  }
                >
                  в дом
                </span>
              </label>
            ) : (
              <label className={styles.toggle} htmlFor="checkbox">
                <span
                  className={
                    checked
                      ? styles.togglelabeldisabled
                      : styles.togglelabelactivated
                  }
                >
                  в квартиру
                </span>
                <input
                  className={styles.togglecheckbox}
                  type="checkbox"
                  id="checkbox"
                  ref={checkboxRef}
                  onChange={onCheck}
                  disabled
                />
                <div className={styles.toggleswitch} />
                <span
                  className={
                    checked
                      ? styles.togglelabelactivated
                      : styles.togglelabeldisabled
                  }
                >
                  в дом
                </span>
              </label>
            )}
          </div>
          <Routes>
            <Route path="/" element={<StepOne selectedData={selectedData} />} />
            <Route path="/steptwo" element={<StepTwo />} />
            <Route path="/stepthree" element={<StepThree />} />
            <Route path="/stepfour" element={<StepFour />} />
            <Route path="/stepfive" element={<StepFive />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
