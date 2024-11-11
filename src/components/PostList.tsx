import styles from "../styles/PostList.module.css";
import { IoIosArrowRoundDown } from "react-icons/io";

function PostList() {
  return (
    <div className={styles["post-writing-box"]}>
      <textarea
        className={styles["post-input"]}
        placeholder="Drop down your thoughts..."
        rows={1}
        aria-label="Post input"
        onInput={(e) => {
          e.target.style.height = "auto";
        }}
      />
      <button>
        <IoIosArrowRoundDown size={32} />
      </button>
    </div>
  );
}

export default PostList;
