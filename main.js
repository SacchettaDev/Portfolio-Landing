(function () {
  "use strict";

  if (typeof AOS !== "undefined") AOS.init({ duration: 1000, easing: "ease-out-cubic", once: false, mirror: true });

  var heroVideo = document.querySelector(".hero-bg-video");
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.setAttribute("playsinline", "");
    heroVideo.setAttribute("webkit-playsinline", "");
    function play() { heroVideo.play().catch(function () {}); }
    play();
    heroVideo.addEventListener("loadeddata", play);
    heroVideo.addEventListener("canplay", play);
  }

  var loader = document.querySelector(".page-loader");
  var reloadBtn = document.querySelector(".reload-btn");
  if (reloadBtn) reloadBtn.addEventListener("click", function () { location.reload(); });
  if (document.documentElement.classList.contains("no-loader")) {
    if (loader) loader.remove();
    document.body.classList.add("loader-hidden");
    return;
  }
  if (loader) {
    sessionStorage.setItem("loaderShown", "1");
    var done = false;
    function hide() {
      if (done) return;
      done = true;
      document.body.classList.add("loader-hidden");
      loader.classList.add("hide");
      setTimeout(function () { loader.style.display = "none"; }, 700);
    }
    setTimeout(hide, 2300);
    setTimeout(hide, 7000);
  }

  var scrollBtn = document.getElementById("scrollDownBtn");
  var aboutEl = document.getElementById("about");
  if (scrollBtn && aboutEl) {
    scrollBtn.addEventListener("click", function (e) {
      e.preventDefault();
      var y = aboutEl.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  }

  var menu = document.getElementById("side-menu");
  var menuOpen = document.getElementById("menuOpen");
  var menuClose = document.getElementById("menuClose");
  var backdrop = document.getElementById("menuBackdrop");
  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    menuOpen.setAttribute("aria-expanded", open ? "true" : "false");
  }
  if (menuOpen) menuOpen.addEventListener("click", function () { setMenu(true); });
  if (menuClose) menuClose.addEventListener("click", function () { setMenu(false); });
  if (backdrop) backdrop.addEventListener("click", function () { setMenu(false); });
  if (menu) menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  window.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  var expPanel = document.getElementById("info-card-experiences");
  var closeExpBtn = document.getElementById("closeExpCard");
  function openExp(data) {
    if (!data) return;
    document.getElementById("card-title").textContent = data.title;
    document.getElementById("card-date").textContent = data.date;
    document.getElementById("card-company").textContent = data.company;
    document.getElementById("card-description").innerHTML = data.description.replace(/\n/g, "<br>");
    expPanel.style.display = "flex";
    expPanel.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }
  function closeExp() {
    expPanel.style.display = "none";
    expPanel.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }
  document.querySelectorAll(".experience-card").forEach(function (card) {
    card.addEventListener("click", function () {
      var id = card.getAttribute("data-id");
      var data = window.__I18N && window.__I18N.getExperiences ? window.__I18N.getExperiences()[id] : null;
      openExp(data);
    });
  });
  if (closeExpBtn) closeExpBtn.addEventListener("click", closeExp);
  if (expPanel) expPanel.addEventListener("click", function (e) { if (!e.target.closest(".card-content")) closeExp(); });

  var projPanel = document.getElementById("info-card-projects");
  var closeProjBtn = document.getElementById("closeProjCard");
  function openProj(data) {
    if (!data) return;
    document.getElementById("project-title").textContent = data.title;
    document.getElementById("project-description").innerHTML = data.description.replace(/\n/g, "<br>");
    document.getElementById("project-skills").textContent = data.skills;
    document.getElementById("project-btn-demo").href = data.demo || data.link;
    document.getElementById("project-btn-repo").href = data.link;
    var linkedinBtn = document.getElementById("project-btn-linkedin");
    linkedinBtn.href = data.linkedinPost || "#";
    linkedinBtn.style.display = (data.linkedinPost && data.linkedinPost.trim() !== "") ? "inline-flex" : "none";
    var mediaEl = document.getElementById("project-media-inner");
    var videoSrc = data.video || "media/loading.mp4";
    var isPlaceholder = !data.video;
    var videoAttrs = "class=\"project-video\" src=\"" + videoSrc.replace(/\"/g, "&quot;") + "\" controls playsinline" + (isPlaceholder ? " loop muted" : "") + "></video>";
    mediaEl.innerHTML = "<video " + videoAttrs;
    projPanel.style.display = "flex";
    projPanel.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }
  function closeProj() {
    projPanel.style.display = "none";
    projPanel.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }
  document.querySelectorAll(".project-card").forEach(function (card) {
    card.addEventListener("click", function (e) {
      e.preventDefault();
      var id = card.getAttribute("data-id");
      var data = window.__I18N && window.__I18N.getProjects ? window.__I18N.getProjects()[id] : null;
      openProj(data);
    });
  });
  if (closeProjBtn) closeProjBtn.addEventListener("click", closeProj);
  if (projPanel) projPanel.addEventListener("click", function (e) { if (!e.target.closest(".project-content")) closeProj(); });

  var form = document.getElementById("contactForm");
  var formStatus = document.getElementById("form-status");
  if (form && formStatus) {
    function msg(key) {
      var fallback = { sending: "Sending…", ok: "Message sent ✓", error: "Something went wrong. Try again.", networkErr: "Network error. Try again." };
      return window.__I18N && window.__I18N.formMsg ? window.__I18N.formMsg(key) : fallback[key];
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      formStatus.textContent = msg("sending");
      formStatus.className = "form-status sending";
      fetch(form.action, { method: "POST", body: fd, headers: { Accept: "application/json" } })
        .then(function (r) {
          if (r.ok) { formStatus.textContent = msg("ok"); formStatus.className = "form-status ok"; form.reset(); }
          else { formStatus.textContent = msg("error"); formStatus.className = "form-status err"; }
        })
        .catch(function () { formStatus.textContent = msg("networkErr"); formStatus.className = "form-status err"; });
    });
  }

  var backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", function () { backToTop.classList.toggle("show", window.scrollY > 300); });
    backToTop.addEventListener("click", function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); });
  }
})();
