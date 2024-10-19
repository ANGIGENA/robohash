"use client";
import { useState } from "react";
import styles from "./Styles.module.css";
import { MOCKMONSTERS } from "./constants";

function ViewMonstersRolodex() {
  const [monsters, setMonsters] = useState(MOCKMONSTERS);

  return (
    <div>
      {monsters.map((monster) => {
        return <span>{monster.name}</span>;
      })}
    </div>
  );
}
export default ViewMonstersRolodex;
