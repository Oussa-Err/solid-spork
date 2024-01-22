import React from "react";
import "./pages-global.css";

const Dashboard = (user) => {
  const role = user.user.userData.role;
  return (
    <>
      <div className="flex-container">
        <aside className="sidebar">
          <h1 className="">Dashboard</h1>
          <nav>
            <a className="" href="/">
              Acceuil
            </a>
            <a className="" href="/products">
              Nos Produits
            </a>
            <a className="#" href="#">
              Parametres
            </a>
          </nav>
        </aside>
        <main className="main-content">
          <h1 className="">Welcome back {user.user.userData.name}!</h1>
          <p className="">
            Here's what's been happening since your last visit.
          </p>
          <div className="checkout-grid-container">
            <div className="dachboard-card">
              <h2 className="">New Customers</h2>
              {role === "admin" ? (
                <>
                  <p className="">
                    Looks like you have some new customers since your last
                    visit.
                  </p>
                  <button>
                    <a
                      href="/vegetable-form"
                      className="button_top"
                      style={{ color: "#000000" }}
                    >
                      Edit
                    </a>
                  </button>
                </>
              ) : (
                <p>welcome </p>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
