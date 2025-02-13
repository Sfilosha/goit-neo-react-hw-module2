import style from "./Options.module.css";
import { AiOutlineMeh, AiOutlineFrown, AiOutlineSmile } from "react-icons/ai";

function Options({ onClick, totalCount, onReset }) {
  return (
    <div className={style.optionsWrapper}>
      <div className={style.rateWrapper}>
        <button
          className={style.btnRate}
          type="button"
          onClick={onClick}
          name="good"
        >
          <AiOutlineSmile className={style.iconGood} />
          Good
        </button>
        <button
          className={style.btnRate}
          type="button"
          onClick={onClick}
          name="neutral"
        >
          <AiOutlineMeh className={style.iconNeutral} />
          Neutral
        </button>
        <button
          className={style.btnRate}
          type="button"
          onClick={onClick}
          name="bad"
        >
          <AiOutlineFrown className={style.iconBad} />
          Bad
        </button>
      </div>

      {totalCount !== 0 && (
        <div className={style.resetWrapper}>
          <button
            className={style.btnReset}
            type="button"
            name="reset"
            onClick={onReset}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default Options;
