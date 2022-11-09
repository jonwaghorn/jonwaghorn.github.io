function setHeadingColour() {
  const colour = "#" + ((1 << 24) * Math.random() | 0).toString(16);
  document.getElementById("colour-me-baby").style.color = colour;
}

window.onload = () => {
  setHeadingColour();
};
