import "./PostForm.css";

const PostForm = () => {
  return (
    <section className="form-container">
      <form type="submit" className="postjob-form">
        <article>
          <aside className="form-input">
            <label>Job Title</label>
            <input type="text" />
            <label>Salary</label>
            <input type="text" />
            <label>Benefits</label>
            <input type="text" />
            <label>Location</label>
            <input type="text" />
            <label>Stack 1</label>
            <input type="text" />
            <label>Stack 2</label>
            <input type="text" />
            <label>Stack 3</label>
            <input type="text" />
          </aside>
          <aside className="form-textarea">
            <label>Job Description</label>
            <textarea type="text" />
            <label>Responsibilities</label>
            <textarea type="text" />
            <label>Education (Preferred)</label>
            <textarea type="text" />
            <label>Experience (Preferred)</label>
            <textarea type="text" />
            <label>Skills (Preferred)</label>
            <textarea type="text" />
          </aside>
        </article>
        <button>Post</button>
        <button>Cancel</button>
      </form>
    </section>
  );
};

export default PostForm;
