import "./App.css";
import image from "../Assets/TypescriptLogo.png";

export const App = () => {
  return `
    <p class="first-line">This part is rendered by the App file</p>
    <p class="second-line">Everything seems to be working!!</p>
    <img src=${image} class="image"/>
    `;
};
