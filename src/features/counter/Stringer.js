import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, addString, addAsync } from "./stringerSlice";
import styles from "./Stringer.module.css";

export function Stringer() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [stringValue, setStringValue] = React.useState("A");

  return (
    <div>
      <div>
        <span>{count}</span>
        <p>
          <button aria-label="Add letter 'A'" onClick={() => dispatch(add())}>
            Add letter 'A'
          </button>
          <button
            aria-label="Remove last letter"
            onClick={() => dispatch(remove())}
          >
            Remove last letter
          </button>
        </p>
        <p>
          <input
            className={styles.textbox}
            aria-label="Set string"
            value={stringValue}
            onChange={(e) => setStringValue(e.target.value)}
          />
          <button
            className={styles.button}
            aria-label="Add string"
            onClick={() => dispatch(addString(String(stringValue)))}
          >
            Add string
          </button>
          <button
            className={styles.asyncButton}
            onClick={() => dispatch(addAsync(String(stringValue) || ""))}
          >
            Add Async
          </button>
        </p>
      </div>
    </div>
  );
}
