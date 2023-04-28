var Images = {};

var texts = [
  "",
  "",
  "Атака українських позицій в районі селища Піщовик на сході Маріуполя. Обстріли східних і західних передмість, обстріли аеропорту з моря.",
  "Росіяни прорвали оборону на півночі, в районі селища Анадоль, просуваються до Маріуполя, захопили село Кременівку.",
  "Ворог наближається до Маріуполя з заходу, сходу і півночі. Обстріли селища Нікольське. Бої у Гнутовому, Сартані. Обстріли усіх районів міста",
  "Росіяни захопили Гнутове і Сартану. Обстрілюють місто з артилерії, яку розмістили поблизу Тополиного. З півночі просунулися впритул до заводу “Ілліча”.",
  "Ворог підійшов до межі Маріуполя на сході і стрімко наближається із заходу. Тривають обстріли житлових мікрорайонів на сході і в центрі.",
  "Маріуполь у повному оточенні. Тривають бої і масовані обстріли в усіх мікрорайонах.",
  "Росіяни поступово просуваються на заході, сході і півночі міста, обстрілюють житлові масиви, контролюють дороги, що ведуть у місто",
  "Росіяни поступово просуваються на заході, сході і півночі міста, обстрілюють житлові масиви, контролюють дороги, що ведуть у місто",
  "Росіяни поступово просуваються на заході, сході і півночі міста, обстрілюють житлові масиви, контролюють дороги, що ведуть у місто",
  "Бій на цегельному заводі на західній околиці міста. Росіяни атакували українську колону між Мангушем і Нікольським.",
  "На східну межу міста через селище Виноградне заходить ворожа піхота, охоплюючи мікрорайон Східний з півдня",
  "Авіаудар по центру міста. Бої на південно-західній околиці Маріуполя, у Покровському. ",
  "Росіяни вдарили по лікарні і пологовому будинку у центрі Маріуполя. Кільце навколо центральної частини міста поступово стискається",
  "Ворожі танки з’явилися у західних межах міста. Там тривають бої. Черговий авіаудар по центру, знищення будинку зв’язку.",
  "Російський спецназ у глибокому тилу українців - у провулку Граверному поблизу “Азовсталі”. Тривають бої на західній околиці міста. На сході “міліція ДНР” проривається у мікрорайон Лівобережний.",
  "",
  "Російська армія штурмує морський порт Маріуполя. ",
  "Росіяни скинули авіабомбу на драмтеатр у центрі міста. Ворожа техніка і піхота оточили центральну частину міста.",
];

for (var i = 1; i < 20; i++) {
  Images[i] = "./maps/d" + i + ".jpg";

  d3.select(".scroll__text")
    .append("div")
    .attr("class", "step step-text")
    .append("div")
    .attr("class", "step-map")
    .append("div")
    .attr("class", "step-text-wrapper")
    .text(texts[i]);
}

console.log(Images);

var container = document.querySelector("#scroll");
var graphic = document.querySelector("#scroll > .scroll__graphic"); //container.select('.scroll__graphic');
var text = document.querySelector("#scroll > .scroll__text"); //container.select('.scroll__text');
var step = document.querySelector("#scroll > .scroll__text > .step"); // text.selectAll('.step');
var scroller = scrollama();

function handleStepEnter(r) {
  console.log(r.index);
  if (r.index < 3) {
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
      offset: 0.5,
      debug: false,
      progress: true,
    })
    .onStepEnter(handleStepEnter);
}
init();

var ImagesMobile = {};
for (var i = 1; i < 20; i++) {
  ImagesMobile[i] = "./maps/m" + i + ".jpg";

  d3.select(".scroll__text-mobile")
    .append("div")
    .attr("class", "step-mobile")
    .append("div")
    .attr("class", "step-map");
}

console.log(ImagesMobile);

var containerMobile = document.querySelector("#scroll-mobile");
var graphicMobile = document.querySelector(
  "#scroll-mobile > .scroll__graphic-mobile"
); //container.select('.scroll__graphic');
var textMobile = document.querySelector(
  "#scroll-mobile > .scroll__text-mobile"
); //container.select('.scroll__text');
var stepMobile = document.querySelector(
  "#scroll-mobile > .scroll__text-mobile > .step"
); // text.selectAll('.step');
var scrollerMobile = scrollama();

function handleStepEnterMobile(r) {
  console.log(r.index);
  if (r.index < 4) {
    $("#gif-pic-mobile").attr("src", ImagesMobile[1]);
  } else {
    $("#gif-pic-mobile").attr("src", ImagesMobile[r.index]);
  }
}

function initMobile() {
  scrollerMobile
    .setup({
      container: "#scroll-mobile",
      graphic: ".scroll__graphic-mobile",
      text: ".scroll__text-mobile",
      step: ".scroll__text-mobile .step-mobile",
      offset: 0.5,
      debug: false,
      progress: true,
    })
    .onStepEnter(handleStepEnterMobile);
}
initMobile();
