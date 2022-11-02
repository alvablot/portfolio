const $link = [];
$link[0] = document.getElementById("link1");
$link[1] = document.getElementById("link2");
$link[2] = document.getElementById("link3");
$link[3] = document.getElementById("link4");
$link[4] = document.getElementById("link5");

const $linkB = [];
$linkB[0] = document.getElementById("link1b");
$linkB[1] = document.getElementById("link2b");
$linkB[2] = document.getElementById("link3b");
$linkB[3] = document.getElementById("link4b");
$linkB[4] = document.getElementById("link5b");

const $infoLayer = [];
$infoLayer[0] = document.getElementById("info-layer1");
$infoLayer[1] = document.getElementById("info-layer2");
$infoLayer[2] = document.getElementById("info-layer3");
$infoLayer[3] = document.getElementById("info-layer4");
$infoLayer[4] = document.getElementById("info-layer5");

const $logga = document.getElementById("logga");
const $manyButton = document.getElementById("menu-button");
const $mainSection = document.getElementById("main-section");
const $menu = document.getElementById("menu");
const $menuButton = document.getElementById("menu-button");
const $mainLinks = document.getElementById("main-links");

const $bgHider = document.getElementById("bg-hider");

function controllMenu(vis) {
  $manyButton.style.visibility = "visible";
  const openMenu = setTimeout(() => {
    $manyButton.style.visibility = vis;
  }, 3000);
}
window.document.addEventListener("scroll", (e) => {
  //console.log(window.scrollY);
  $mainLinks.style.top = window.scrollY + "px";
});
//OM MIG
$link[0].addEventListener("click", () => {
  $infoLayer[0].style.display = "inline";
  $infoLayer[1].style.display = "none";
  $infoLayer[2].style.display = "none";
  $infoLayer[3].style.display = "none";
  $infoLayer[4].style.display = "none";
  $link[0].classList.add("active-link");
  $link[1].classList.remove("active-link");
  $link[2].classList.remove("active-link");
  $link[3].classList.remove("active-link");
  $link[4].classList.remove("active-link");
  $logga.style.width = "100%";
  $logga.src = "./img/bomber_loggo3.png";
  document.body.scrollIntoView({ behavior: "smooth" });
});
//Hem
$link[4].addEventListener("click", () => {
  $infoLayer[4].style.display = "inline";
  $infoLayer[1].style.display = "none";
  $infoLayer[2].style.display = "none";
  $infoLayer[3].style.display = "none";
  $infoLayer[0].style.display = "none";
  $link[4].classList.add("active-link");
  $link[1].classList.remove("active-link");
  $link[2].classList.remove("active-link");
  $link[3].classList.remove("active-link");
  $link[0].classList.remove("active-link");
  $logga.style.width = "100%";
  $logga.src = "./img/bomber_loggo1.png";
  document.body.scrollIntoView({ behavior: "smooth" });
});

$link[1].addEventListener("click", () => {
  $infoLayer[1].style.display = "inline";
  $infoLayer[0].style.display = "none";
  $infoLayer[2].style.display = "none";
  $infoLayer[3].style.display = "none";
  $infoLayer[4].style.display = "none";
  $link[1].classList.add("active-link");
  $link[2].classList.remove("active-link");
  $link[3].classList.remove("active-link");
  $link[4].classList.remove("active-link");
  $link[0].classList.remove("active-link");
  $logga.style.width = "100%";
  $logga.src = "./img/bomber_loggo3.png";
  document.body.scrollIntoView({ behavior: "smooth" });
});

$link[2].addEventListener("click", () => {
  $infoLayer[2].style.display = "inline";
  $infoLayer[1].style.display = "none";
  $infoLayer[0].style.display = "none";
  $infoLayer[3].style.display = "none";
  $infoLayer[4].style.display = "none";
  $link[2].classList.add("active-link");
  $link[1].classList.remove("active-link");
  $link[3].classList.remove("active-link");
  $link[4].classList.remove("active-link");
  $logga.style.width = "100%";
  $logga.src = "./img/bomber_loggo3.png";
  document.body.scrollIntoView({ behavior: "smooth" });
});

$link[3].addEventListener("click", () => {
  $infoLayer[3].style.display = "inline";
  $infoLayer[1].style.display = "none";
  $infoLayer[2].style.display = "none";
  $infoLayer[0].style.display = "none";
  $infoLayer[4].style.display = "none";
  $link[3].classList.add("active-link");
  $link[1].classList.remove("active-link");
  $link[2].classList.remove("active-link");
  $link[0].classList.remove("active-link");
  $link[4].classList.remove("active-link");
  $logga.style.width = "100%";
  $logga.src = "./img/bomber_loggo3.png";
  document.body.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("menu-button").addEventListener("click", () => {
  document.getElementById("menu").style.display = "inline";
});
$linkB[0].addEventListener("click", () => {
  $infoLayer[3].style.display = "none";
  $infoLayer[1].style.display = "none";
  $infoLayer[2].style.display = "none";
  $infoLayer[4].style.display = "none";
  $infoLayer[0].style.display = "inline";
  $menu.style.display = "none";
  $logga.style.width = "100%";
  $logga.src = "./img/bomber_loggo3.png";
  document.body.scrollIntoView({ behavior: "smooth" });
});

$linkB[1].addEventListener("click", () => {
  $infoLayer[0].style.display = "none";
  $infoLayer[3].style.display = "none";
  $infoLayer[2].style.display = "none";
  $infoLayer[4].style.display = "none";
  $infoLayer[1].style.display = "inline";
  $menu.style.display = "none";
  $logga.style.width = "100%";
  $logga.src = "./img/bomber_loggo3.png";
  document.body.scrollIntoView({ behavior: "smooth" });
});

$linkB[2].addEventListener("click", () => {
  $infoLayer[0].style.display = "none";
  $infoLayer[1].style.display = "none";
  $infoLayer[3].style.display = "none";
  $infoLayer[4].style.display = "none";
  $infoLayer[2].style.display = "inline";
  $menu.style.display = "none";
  $logga.style.width = "100%";
  $logga.src = "./img/bomber_loggo3.png";
  document.body.scrollIntoView({ behavior: "smooth" });
});

$linkB[3].addEventListener("click", () => {
  $infoLayer[0].style.display = "none";
  $infoLayer[1].style.display = "none";
  $infoLayer[2].style.display = "none";
  $infoLayer[4].style.display = "none";
  $infoLayer[3].style.display = "inline";
  $menu.style.display = "none";
  $logga.style.width = "100%";
  $logga.src = "./img/bomber_loggo3.png";
  document.body.scrollIntoView({ behavior: "smooth" });
});

$linkB[4].addEventListener("click", () => {
  $infoLayer[0].style.display = "none";
  $infoLayer[1].style.display = "none";
  $infoLayer[2].style.display = "none";
  $infoLayer[3].style.display = "none";
  $infoLayer[4].style.display = "inline";
  $menu.style.display = "none";
  $logga.style.width = "100%";
  $logga.src = "./img/bomber_loggo1.png";
  document.body.scrollIntoView({ behavior: "smooth" });
});
document.getElementById("frame").addEventListener("click", () => {
  $menu.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 320) document.getElementById("menu").style.display = "none";
});
