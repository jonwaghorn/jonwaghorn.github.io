function setHeadingColour() {
  const text_colour = "#" + ((1 << 24) * Math.random() | 0).toString(16);
  const text_border = "#" + (((1 << 24) * Math.random() | 0).toString(16)) + " 0px 0px 2px";
  document.getElementById("colour-me-baby").style.color = text_colour;
  document.getElementById("colour-me-baby").style.textShadow = text_border;
}

window.onload = () => {
  setHeadingColour();
};
