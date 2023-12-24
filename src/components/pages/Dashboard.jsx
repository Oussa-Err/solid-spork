import React from "react";
import "./pages-global.css";

const Dashboard = () => {
  return (
    <>
      <div className="flex-container">
        <aside className="sidebar">
          <h1 className="">Dashboard</h1>
          <nav>
            <a className="" href="#">
              Home
            </a>
            <a className="" href="#">
              Profile
            </a>
            <a className="" href="#">
              Analytics
            </a>
            <a className="" href="#">
              Settings
            </a>
          </nav>
        </aside>
        <main className="main-content">
          <h1 className="">Welcome back!</h1>
          <p className="">
            Here's what's been happening since your last visit.
          </p>
          <div className="checkout-grid-container">
            <div className="dachboard-card">
              <h2 className="">New Customers</h2>
              <p className="">
                Looks like you have some new customers since your last visit.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
