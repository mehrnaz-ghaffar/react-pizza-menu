import React from "react";
import ReactDom from "react-dom/client";
// import "./index.css";
import "./portfolio.css";

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

// function App() {
//   return (
//     <div>
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }

// function Header() {
//   // const style = { color: "red", textTransform: "uppercase", fontSize: "48" };

//   return (
//     <header className="header">
//       <h1>Fast React Pizza Co.</h1>
//     </header>
//   );
// }

// function Menu() {
//   return (
//     <main className="menu">
//       <h2>Our Menu</h2>
//       <Pizza
//         photoUrl="pizzas/focaccia.jpg"
//         pizzaName="Focaccia"
//         ingredients="Bread with italian olive oil and rosemary"
//         price={10}
//       />
//     </main>
//   );
// }

// function Pizza(props) {
//   return (
//     <div className="pizza">
//       <img src={props.photoUrl} alt={props.pizzaName} />
//       <div>
//         <h1>{props.pizzaName}</h1>
//         <p>{props.ingredients}</p>
//         <span> {props.price} </span>
//       </div>
//     </div>
//   );
// }

// function Footer() {
//   const hour = new Date().getHours();
//   const openHour = 12;
//   const closeHoour = 22;
//   const isOpen = hour >= openHour && hour <= closeHoour;

//   // if (hour >= openHour && hour <= closeHoour) {
//   //   alert("We are open :) ");
//   // } else {
//   //   alert("Sorry we are closed :( ");
//   // }

//   return (
//     <footer className="footer">
//       {new Date().toLocaleTimeString()} We're currently open!
//     </footer>
//   );
//   // This is actually what happens behind the scene
//   // return React.createElement("footer", null, "We're currently open!");
// }

function App() {
  return (
    <div className="card">
      <Image />

      <Introduction />

      <SkillList />
    </div>
  );
}

function Image() {
  return <img className="portfilioImage" src="./logo512.png" />;
}

function Introduction() {
  const pStyle = { padding: " 10px 0" };

  return (
    <div>
      <h1>Mehrnaz Ghaffar</h1>
      <p style={pStyle}>
        Front-end developer with a bachlor's degree in Software Engineering and
        +2 years of experiance in vue.js framework currently learning React
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skillsContainer">
      <Skills
        skillName={"HTML"}
        skillIcon={"text"}
        backgroundColor={"lightblue"}
      />
      <Skills skillName={"Css"} skillIcon={"text"} backgroundColor={"pink"} />
      <Skills
        skillName={"Javascript"}
        skillIcon={"text"}
        backgroundColor={"yellow"}
      />
      <Skills skillName={"Vue"} skillIcon={"text"} backgroundColor={"green"} />
    </div>
  );
}

function Skills(props) {
  const style = { backgroundColor: props.backgroundColor };
  return (
    <div className="skillChips" style={style}>
      <span> {props.skillName} </span>
      <span> {props.skillIcon} </span>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
