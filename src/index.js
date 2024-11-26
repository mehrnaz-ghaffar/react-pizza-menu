import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", textTransform: "uppercase", fontSize: "48" };

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const hasAnyPizzas = pizzaData.length;
  // const hasAnyPizzas = 0;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {hasAnyPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p> We are still working on our menu </p>
      )}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
      <div>
        <h1>{props.pizzaObject.name}</h1>
        <p>{props.pizzaObject.ingredients}</p>
        <span> {props.pizzaObject.price} </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHoour = 22;
  const isOpen = hour >= openHour && hour <= closeHoour;

  // if (hour >= openHour && hour <= closeHoour) {
  //   alert("We are open :) ");
  // } else {
  //   alert("Sorry we are closed :( ");
  // }

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're open untill {closeHoour}:00, come visite us or order online
          </p>
          <button className="btn"> Order Now </button>
        </div>
      ) : (
        <p>
          We are happy to welcome you from {openHour}:00 to {closeHoour}:00
        </p>
      )}
    </footer>
  );
  // This is actually what happens behind the scene
  // return React.createElement("footer", null, "We're currently open!");
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
