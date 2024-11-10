import styles from "../styles/PostList.module.css";

function PostList() {
  return (
    <div className={styles["post-writing-box"]}>
      <input
        className={styles["post-input"]}
        placeholder="Drop down your thoughts..."
        type="text"
        aria-label="Post input"
      />
      <button></button>
    </div>
  );
}

export default PostList;
