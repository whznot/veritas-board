function PostList() {
  return (
    <div className="post-writing-box">
      <input
        className="post-input"
        placeholder="Drop down your thoughts..."
        type="text"
        aria-label="Post input"
      />
      <button>Send!</button>
    </div>
  );
}

export default PostList;
