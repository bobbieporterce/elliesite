// ✧ sparkle cursor trail — classic Y2K desktop toy, minus the download ✧
(function () {
  var glyphs = ["✦", "★", "✧", "☆", "✩", "❀", "✿"];
  var colors = ["#ff00cc", "#00fff7", "#fff700", "#33ff00", "#9d00ff"];
  var last = 0;

  document.addEventListener("mousemove", function (e) {
    var now = Date.now();
    if (now - last < 40) return; // throttle so it doesn't flood the DOM
    last = now;

    var star = document.createElement("span");
    star.className = "trail-sparkle";
    star.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
    star.style.left = e.clientX + (Math.random() * 10 - 5) + "px";
    star.style.top = e.clientY + (Math.random() * 10 - 5) + "px";
    star.style.color = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(star);
    setTimeout(function () {
      star.remove();
    }, 700);
  });

  // fake hit counter that ticks up once per visit, stored locally
  var counterEl = document.querySelector("[data-hit-counter]");
  if (counterEl) {
    var base = 133742;
    var bumped = window.sessionStorage.getItem("sparkletv-hits");
    if (!bumped) {
      base += Math.floor(Math.random() * 9) + 1;
      window.sessionStorage.setItem("sparkletv-hits", "1");
    }
    var digits = String(base).padStart(6, "0").split("");
    counterEl.innerHTML = digits.map(function (d) {
      return "<span>" + d + "</span>";
    }).join("");
  }
})();
