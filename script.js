document.getElementById("button").addEventListener("click", () => {
  console.log("click");
  document.getElementById("secret").hidden = false;
  document.getElementById("dice-container").hidden = true;
  document.getElementById("video").play();
});
