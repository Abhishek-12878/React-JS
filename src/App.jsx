
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";


function Profile() {
  return (
    <img
      src="https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=landscape-nature-sky-236047.jpg&fm=jpg"
      alt="Profile"
      width="1250"
      height="550"
    />
  );
}

function Dashboard() {
  return (
    <section className="content">
      <h1>Welcome to Dashboard</h1>
      <Profile />
    </section>
  );
}


function Tasks() {
  return (
    <section className="content">
      <h1>Tasks</h1>
      <p>Here you can manage your tasks.</p>
    </section>
  );
}


function Analytics() {
  return (
    <section className="content">
      <h1>Analytics</h1>
      <p>Here you can see your analytics.</p>
    </section>
  );
}


function Settings() {
  return (
    <section className="content">
      <h1>Settings</h1>
      <p>Here you can change your settings.</p>
    </section>
  );
}


function ProfilePage() {
  return (
    <section className="content">
      <h1>Profile</h1>
      <form>
      <label>Enter your name:
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </label>
    </form>
    <form>
      <label>Enter your Mobile number:
        <input type="text" name="Mobile" />
        <button type="submit">Submit</button>
      </label>
    </form>
      <Profile />
    </section>
  );
}


function App() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      
      <aside className="sidebar">

        <h2>MyDashboard</h2>

        <nav>

          <button onClick={() => navigate("/tasks")}>
            Tasks
          </button>

          <button onClick={() => navigate("/")}>
            Dashboard
          </button>

          <button onClick={() => navigate("/analytics")}>
            Analytics
          </button>

          <button onClick={() => navigate("/settings")}>
            Settings
          </button>

        </nav>

      </aside>

  
      <main className="main">

        
        <header className="navbar">

          <h2>Dashboard</h2>

          <button onClick={() => navigate("/profile")}>
            Profile
          </button>

        </header>

      
        <Routes>

          <Route path="/" element={<Dashboard />} />

          <Route path="/tasks" element={<Tasks />} />

          <Route path="/analytics" element={<Analytics />} />

          <Route path="/settings" element={<Settings />} />

          <Route path="/profile" element={<ProfilePage />} />

        </Routes>

      </main>

    </div>
  );
}

export default App;
