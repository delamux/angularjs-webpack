import "./mystyles.scss";
import logoImage from "./content/logo_1.png";

import { getAvg } from "./averageService";

const scores = [90, 75, 60, 99, 94, 30];
const averageScore = getAvg(scores);
const messageToDisplay = `average score ${averageScore}`;

document.write(messageToDisplay);

const image = document.createElement("img");
image.src = logoImage;

document.getElementById('image-container').appendChild(image);
