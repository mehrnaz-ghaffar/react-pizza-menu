import React from "react";
import ReactDom from "react-dom/client";
// import "./index.css";
import "./portfolio.css";

const skills = [
  {
    name: "html+css",
    level: "advanced",
    color: "lightblue",
  },
  {
    name: "javascript",
    level: "intermidiate",
    color: "yellow",
  },
  {
    name: "vuejs",
    level: "intermidiate",
    color: "green",
  },
  {
    name: "react",
    level: "beginner",
    color: "blue",
  },
  {
    name: "typescript",
    level: "beginner",
    color: "orange",
  },
];

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
  return (
    <img className="portfilioImage" src="./logo512.png" alt="portfiloImg" />
  );
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
      {skills.map((skill) => (
        <Skills
          name={skill.name}
          color={skill.color}
          level={skill.level}
          key={skill.name}
        />
      ))}
    </div>
  );
}

function Skills({ name, color, level }) {
  const style = { backgroundColor: color };
  return (
    <div className="skillChips" style={style}>
      <span> {name} </span>
      <span>
        {level === "beginner" ? "👶" : level === "intermidiate" ? "👍" : "💪"}
      </span>

      {/* <span> {level === "beginner" && "👶"} </span>
      <span> {level === "intermidiate" && "👍"} </span>
      <span> {level === "advanced" && "💪"} </span> */}
    </div>
  );
}

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
//   const hasAnyPizzas = pizzaData.length;
//   // const hasAnyPizzas = 0;

//   return (
//     <main className="menu">
//       <h2>Our Menu</h2>

//       {hasAnyPizzas > 0 ? (
//         // <React.Fragment>
//         <>
//           <p>This is a test paraghraph to test fragments</p>

//           <ul className="pizzas">
//             {pizzaData.map((pizza) => (
//               <Pizza pizzaObject={pizza} key={pizza.name} />
//             ))}
//           </ul>
//         </>
//       ) : (
//         // </React.Fragment>
//         <p> We are still working on our menu </p>
//       )}
//     </main>
//   );
// }

// function Pizza({ pizzaObject }) {
//   return (
//     <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
//       <img src={pizzaObject.photoName} alt={pizzaObject.name} />
//       <div>
//         <h1>{pizzaObject.name}</h1>
//         <p>{pizzaObject.ingredients}</p>
//         <span> {pizzaObject.soldOut ? "Sold Out" : pizzaObject.price} </span>
//       </div>
//     </li>
//   );
// }

// function Footer() {
//   const hour = new Date().getHours();
//   const openHour = 12;
//   const closeHour = 22;
//   const isOpen = hour >= openHour && hour <= closeHour;

//   return (
//     <footer className="footer">
//       {isOpen ? (
//         <Order closeHour={closeHour} openHour={openHour} />
//       ) : (
//         <p>
//           We are happy to welcome you from {openHour}:00 to {closeHour}:00
//         </p>
//       )}
//     </footer>
//   );
//   // This is actually what happens behind the scene
//   // return React.createElement("footer", null, "We're currently open!");
// }

// function Order({ closeHour, openHour }) {
//   return (
//     <div className="order">
//       <p>
//         We're open from {openHour} untill {closeHour}:00, come visite us or
//         order online
//       </p>
//       <button className="btn"> Order Now </button>
//     </div>
//   );
// }

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
