import React from "react";
import "./pages-global.css";

const Dashboard = () => {
  return (
    <>
      <div className="flex-container">
        <aside className="sidebar">
          <h1 className="">Dashboard</h1>
          <nav>
            <a className="/" href="#">
              Acceuil
            </a>
            <a className="/products" href="#">
              Nos Produits
            </a>
            <a className="#" href="#">
              Parametres
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
