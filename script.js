const paragraph = `Hello world! I'm Ilias Bonie and I'm currently a student at Portland State University and planning to graduate with a Computer Science degree in 2023. My past work experience consists of being a Front-End developer and a tutor for the Computer Science department. Currently I work as a software developer intern at Amazon. My goal is to graduate and work full-time as a software engineer. Some of side hobbies that I like to do in my free time includes playing video games, basketball, and working out. `;
const index = paragraph.indexOf(". ");
const index2 = index + 1;
const subString1 = paragraph.substring(0, index + 1);
const subString2 = paragraph.substring(index + 1);
const div2 = document.getElementsByClassName("about-p");
const pTag = createPElement(subString1, subString2);
document.getElementsByClassName("about-p")[0].appendChild(pTag);

function createPElement(subString1, subString2) {
  const pElement = document.createElement("p");
  const span = document.createElement("span");
  span.innerHTML = subString1;
  pElement.setAttribute("style", "text-align: left; color: white;");
  pElement.innerHTML =
    "<span style=font-weight:bold>" + subString1 + "</span>" + subString2;
  return pElement;
}
