import "./Settings.css";
import React from "react";

const Settings = () => {
  return (
    <main className="settings">
      <section className="settings-left">
        <h2>Settings & Privacy</h2>
        <article>
          <figure>
            <span className="material-symbols-outlined settings-icon">
              maximize
            </span>
            <figcaption>Sign In and Security</figcaption>
          </figure>
          <figure>
            <span className="material-symbols-outlined settings-icon">
              maximize
            </span>
            <figcaption>Account Preferences</figcaption>
          </figure>
          <figure>
            <span className="material-symbols-outlined settings-icon">
              maximize
            </span>
            <figcaption>Notifications</figcaption>
          </figure>
          <figure>
            <span className="material-symbols-outlined settings-icon">
              maximize
            </span>
            <figcaption>Data Privacy</figcaption>
          </figure>
        </article>
      </section>
      <section className="settings-right">
        <h2>Sign In & Security</h2>
        <article>
          <label>Email</label>
          <input type="text" placeholder="sam28@gmail.com" />
        </article>
        <article>
          <label>Phone Number </label>
          <input type="text" placeholder="012 344 6783" />
        </article>
        <article>
          <label>Password</label>
          <input type="password" placeholder="....." />
        </article>
      </section>
    </main>
  );
};

export default Settings;
