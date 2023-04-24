var Images = {};
for (var i = 1; i < 21; i++) {
  Images[i] = "./maps/" + i + ".jpg";

  d3.select(".scroll__text")
    .append("div")
    .attr("class", "step")
    .append("div")
    .attr("class", "step-map");
}

console.log(Images);

var container = document.querySelector("#scroll");
var graphic = document.querySelector("#scroll > .scroll__graphic"); //container.select('.scroll__graphic');
var text = document.querySelector("#scroll > .scroll__text"); //container.select('.scroll__text');
var step = document.querySelector("#scroll > .scroll__text > .step"); // text.selectAll('.step');
var scroller = scrollama();

function handleStepEnter(r) {
  if (r.index < 4) {
    $("#gif-pic").attr("src", Images[1]);
  } else {
    $("#gif-pic").attr("src", Images[r.index]);
  }
}

function init() {
  scroller
    .setup({
      container: "#scroll",
      graphic: ".scroll__graphic",
      text: ".scroll__text",
      step: ".scroll__text .step",
      offset: 0.9,
      debug: false,
      progress: true,
    })
    .onStepEnter(handleStepEnter);
}
init();
