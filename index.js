let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let hr_dot = document.querySelector(".hr_dot");
let min_dot = document.querySelector(".min_dot");
let sec_dot = document.querySelector(".sec_dot");

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let ap = h > 12 ? "PM" : "AM";

if (h > 12) h = h - 12;
hours.innerHTML = h < 10 ? `0${h}` : h;
minutes.innerHTML = m < 10 ? `0${m}` : m;
seconds.innerHTML = s < 10 ? `0${s}` : s;
ampm.innerHTML = ap;

hh.style.strokeDashoffset = 440 - (440 * h) / 12;
hr_dot.style.transform = `rotate(${h * 30}deg)`;
mm.style.strokeDashoffset = 440 - (440 * m) / 60;
min_dot.style.transform = `rotate(${m * 6}deg)`;
ss.style.strokeDashoffset = 440 - (440 * s) / 60;
sec_dot.style.transform = `rotate(${s * 6}deg)`;

setInterval(() => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ap = h > 12 ? "PM" : "AM";

  if (h > 12) h = h - 12;
  hours.innerHTML = h < 10 ? `0${h}` : h;
  minutes.innerHTML = m < 10 ? `0${m}` : m;
  seconds.innerHTML = s < 10 ? `0${s}` : s;
  ampm.innerHTML = ap;

  anime({
    easing: "linear",
    targets: hh,
    strokeDashoffset: 440 - (440 * h) / 12,
    duration: 1000 * 60 * 60,
  });
  anime({
    easing: "linear",
    targets: hr_dot,
    rotate: h * 30,
    duration: 1000 * 60 * 60,
  });
  anime({
    easing: "linear",
    targets: mm,
    strokeDashoffset: 440 - (440 * m) / 60,
    duration: 1000 * 60,
  });
  anime({
    easing: "linear",
    targets: min_dot,
    rotate: m * 6,
    duration: 1000 * 60,
  });
  anime({
    easing: "linear",
    targets: ss,
    strokeDashoffset: 440 - (440 * s) / 60,
    duration: 1000,
  });
  anime({
    easing: "linear",
    targets: sec_dot,
    rotate: s * 6,
    duration: 1000,
  });
}, 1000);
