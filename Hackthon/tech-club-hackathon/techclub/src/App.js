import React, { useState } from "react";

function Nav({ navigate, current, theme, toggleTheme }) {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <img src="/logo.svg" alt="Tech Club" className="logo" />
        <span>Tech Club</span>
      </div>
      <ul className="nav-links">
        <li className={current === "home" ? "active" : ""}>
          <button onClick={() => navigate("home")}>Home</button>
        </li>
        <li className={current === "register" ? "active" : ""}>
          <button onClick={() => navigate("register")}>Registration</button>
        </li>
        <li className={current === "info" ? "active" : ""}>
          <button onClick={() => navigate("info")}>Info</button>
        </li>
        <li className={current === "schedule" ? "active" : ""}>
          <button onClick={() => navigate("schedule")}>Schedule</button>
        </li>
        <li className={current === "faq" ? "active" : ""}>
          <button onClick={() => navigate("faq")}>FAQ</button>
        </li>
        <li className={current === "sponsors" ? "active" : ""}>
          <button onClick={() => navigate("sponsors")}>Sponsors</button>
        </li>
        <li className={current === "team" ? "active" : ""}>
          <button onClick={() => navigate("team")}>Team</button>
        </li>
        <li className={current === "about" ? "active" : ""}>
          <button onClick={() => navigate("about")}>About</button>
        </li>
        <li>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

function Home({ navigate }) {
  return (
    <main className="page home">
      <header className="hero">
        <h1>Open Innovation Hackathon 🚀</h1>
        <p>
          Organized by <strong>Tech Club</strong> — build, learn, and compete.
        </p>
        <div className="hero-cta">
          <button className="btn" onClick={() => navigate("register")}>
            Register Now
          </button>
          <button className="btn ghost" onClick={() => navigate("info")}>
            Learn More
          </button>
        </div>
      </header>

      <section className="section">
        <h2>What is this?</h2>
        <p>
          A student-led online hackathon focused on Open Innovation. Collaborate
          in teams, build prototypes, and present solutions for real problems.
        </p>
      </section>
    </main>
  );
}

function Registration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    team: "",
    members: "",
  });
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thanks ${form.name}! Registration recorded (client-side only).`);
  }
  return (
    <div className="page register-page">
      <h2>Register</h2>
      <form className="reg-form" onSubmit={handleSubmit}>
        <label>
          Full Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Team Name (optional)
          <input name="team" value={form.team} onChange={handleChange} />
        </label>
        <label>
          Team Members (comma-separated)
          <input name="members" value={form.members} onChange={handleChange} />
        </label>
        <div className="form-actions">
          <button type="submit" className="btn">
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  );
}

function Info() {
  return (
    <div className="page info-page">
      <h2>Event Info</h2>
      <p>
        Timeline, rules, evaluation criteria, and prize information are outlined
        below.
      </p>
      <section className="section">
        <h3>Important Dates</h3>
        <ul>
          <li>Registration: 16 Feb – 24 Feb</li>
          <li>PPT Submission: 25 Feb – 27 Feb</li>
          <li>Day 1 Hackathon: 28 Feb</li>
          <li>Day 2 Prize Ceremony: Next Day</li>
        </ul>
      </section>
      <section className="section">
        <h3>Rules & Evaluation</h3>
        <ul>
          <li>Team size: 1–4 members</li>
          <li>Presentation: max 15 minutes</li>
          <li>Evaluated on: Code quality, Creativity, Presentation</li>
        </ul>
      </section>
    </div>
  );
}

function Schedule() {
  return (
    <div className="page schedule-page">
      <h2>Schedule</h2>
      <section className="section">
        <div className="grid">
          <div className="card">Day 0 — Orientation & Team Formation</div>
          <div className="card">Day 1 — Hacking Begins</div>
          <div className="card">Day 2 — Mid-check & Mentorship</div>
          <div className="card">Day 3 — Final Demo & Judging</div>
        </div>
      </section>
    </div>
  );
}

function FAQ() {
  return (
    <div className="page faq-page">
      <h2>FAQ</h2>
      <section className="section grid">
        <div className="card">
          <h4>Who can participate?</h4>
          <p>
            Students enrolled in IT/CS-related programs. Open to cross-college
            teams.
          </p>
        </div>
        <div className="card">
          <h4>How to submit?</h4>
          <p>Submit your final PPT and repo link via the submission form.</p>
        </div>
      </section>
    </div>
  );
}

function Sponsors() {
  return (
    <div className="page sponsors-page">
      <h2>Sponsors</h2>
      <section className="section">
        <p>Thank you to our sponsors for supporting the event.</p>
        <div className="grid sponsors-grid">
          <div className="card">Example Corp</div>
          <div className="card">Open Source Initiative</div>
        </div>
      </section>
    </div>
  );
}

function Team() {
  return (
    <div className="page team-page">
      <h2>Organizing Team</h2>
      <section className="section team-grid">
        <div className="card">
          <h4>Team Lead</h4>
          <p>Alex Smith — Mentor</p>
        </div>
        <div className="card">
          <h4>Co-ordinator</h4>
          <p>Priya Verma — Student Lead</p>
        </div>
      </section>
    </div>
  );
}

function About() {
  return (
    <div className="page about-page">
      <h2>About Tech Club</h2>
      <p>
        Tech Club is a student organization that fosters technical learning,
        collaboration, and community-driven projects. This hackathon is one of
        our flagship events.
      </p>
      <section className="section">
        <h3>Contact</h3>
        <p>Email: techclub@example.edu</p>
      </section>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>© 2026 Tech Club | Student-Led Initiative</div>
    </footer>
  );
}

function App() {
  const [page, setPage] = useState("home");
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch (e) {
      return "light";
    }
  });

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  function toggleTheme() {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  }
  return (
    <div className="app-root">
      <Nav
        navigate={setPage}
        current={page}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <div className="content">
        {page === "home" && <Home navigate={setPage} />}
        {page === "register" && <Registration />}
        {page === "info" && <Info />}
        {page === "schedule" && <Schedule />}
        {page === "faq" && <FAQ />}
        {page === "sponsors" && <Sponsors />}
        {page === "team" && <Team />}
        {page === "about" && <About />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
