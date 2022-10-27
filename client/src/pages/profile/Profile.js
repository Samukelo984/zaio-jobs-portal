import "./Profile.css";
import React from "react";
import BackArrow from "../../components/backArrow/BackArrow";

const Profile = () => {
  return (
    <main className="profile">
      <BackArrow />
      <h1>My Profile Settings</h1>
      <section className="profile-container">
        <article className="profile-left">
          <aside>
            <span>
              <h4> Also known As</h4>
              <i className="material-symbols-outlined pen-icon only">
                edit_square
              </i>
            </span>
            <i className="material-symbols-outlined profile-icon">person</i>
            <h5>Junior Software Developer </h5>
            <a href="https://www.google.com/">https://www.google.com/</a>
          </aside>
          <aside>
            <span>
              <h4>Resume/ BS Profile</h4>
              <i className="material-symbols-outlined pen-icon">edit_square</i>
            </span>
            <label htmlFor="resume">Upload</label>
            <input type="file" id="resume" style={{ display: "none" }} />
            <span>
              <h4>Cover Letter/ About Us</h4>
              <i className="material-symbols-outlined pen-icon">edit_square</i>
            </span>
            <label htmlFor="resume">Upload</label>
            <input type="file" id="resume" style={{ display: "none" }} />
          </aside>
          <aside>
            <span>
              <h4>Skills</h4>
              <i className="material-symbols-outlined pen-icon">edit_square</i>
            </span>
            <ul>
              <li>Python</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>Analytical Thinking</li>
              <li>Problem Solving</li>
            </ul>
          </aside>
        </article>
        <article className="profile-right">
          <aside>
            <span>
              <h4>About </h4>
              <i className="material-symbols-outlined pen-icon">edit_square</i>
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              consequatur vero illum veniam repellendus obcaecati quaerat iste
              minima quae numquam quos nam itaque doloribus rem dolorum nesciunt
              fugiat, suscipit odio dolores at eaque! Ratione dolores omnis est
              velit cumque possimus voluptatem maxime, quisquam id sit iusto
              sunt debitis sapiente in eius mollitia quae sequi quas pariatur
              repudiandae eligendi natus illum unde iste? At aliquid nesciunt
              quo, laboriosam sapiente in vel corporis quia maxime magni
              accusamus quos ab voluptas esse odio eveniet necessitatibus quam
              nostrum explicabo iure dicta recusandae ipsam voluptatem mollitia.
              Blanditiis maxime ullam illo rerum itaque hic deserunt eaque.
            </p>
          </aside>
          <aside>
            <span>
              <h4>Education</h4>
              <i className="material-symbols-outlined pen-icon">edit_square</i>
            </span>
            <div className="profile-right-info">
              <img src="" alt="" />
              <p>University of iExperiene</p>
              <p>2021 - 2024</p>
              <p>Junior Software Developer</p>
              <p>Minor in UI/ UX</p>
            </div>
          </aside>
          <aside>
            <span>
              <h4>Experiences</h4>
              <i className="material-symbols-outlined pen-icon">edit_square</i>
            </span>
            <div className="profile-right-info">
              <img src="" alt="" />
              <p>University of iExperiene</p>
              <p>2021 - 2024</p>
              <p>Junior Software Developer</p>
              <p>Minor in UI/ UX</p>
            </div>
          </aside>
          <aside>
            <span>
              <h4>Organizations</h4>
              <i className="material-symbols-outlined pen-icon">edit_square</i>
            </span>
            <div className="profile-right-info">
              <img src="" alt="" />
              <p>University of iExperiene</p>
              <p>2021 - 2024</p>
              <p>Junior Software Developer</p>
              <p>Minor in UI/ UX</p>
            </div>
          </aside>
          <aside>
            <span>
              <h4>Certifications</h4>
              <i className="material-symbols-outlined pen-icon">edit_square</i>
            </span>
            <div className="profile-right-info">
              <img src="" alt="" />
              <p>University of iExperiene</p>
              <p>2021 - 2024</p>
              <p>Junior Software Developer</p>
              <p>Minor in UI/ UX</p>
            </div>
          </aside>
        </article>
      </section>
    </main>
  );
};

export default Profile;
