/* null Dallas — shared site behavior. You normally don't need to edit this. */
(function () {
  "use strict";

  var S = window.SITE || { links: {}, social: [] };
  var EVENTS = window.EVENTS || [];
  var TEAM = window.TEAM || [];
  var page = document.body.getAttribute("data-page");

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function slug(s) { return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-"); }
  function toDate(iso) { return new Date(iso + "T12:00:00"); }
  function fmt(d, opts) { return d.toLocaleDateString("en-US", opts); }
  var sampleBadge = '<span class="sample" title="Placeholder content. Edit js/data.js">Sample</span>';

  /* ---------- Header ---------- */
  var NAV = [
    ["index.html", "Home", "home"],
    ["events.html", "Events", "events"],
    ["about.html", "About", "about"],
    ["team.html", "Team", "team"],
    ["get-involved.html", "Get involved", "involved"]
  ];
  var mark =
    '<svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true">' +
    '<rect width="32" height="32" rx="7" fill="#1C2C54"/>' +
    '<rect x="15" y="14" width="2" height="15" fill="#8DB9E6"/>' +
    '<circle cx="16" cy="11" r="6" fill="#F3B23A"/></svg>';

  var header = document.querySelector("[data-header]");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<div class="wrap">' +
      '<a class="brand" href="index.html">' + mark + "<span>" + esc(S.chapter) + "</span></a>" +
      '<button class="menu-btn" aria-expanded="false" aria-controls="site-nav">Menu</button>' +
      '<nav class="nav" id="site-nav" aria-label="Main">' +
      NAV.map(function (n) {
        return '<a href="' + n[0] + '"' + (n[2] === page ? ' aria-current="page"' : "") + ">" + n[1] + "</a>";
      }).join("") +
      '<a class="nav-cta" href="' + esc(S.links.propose) + '">Propose a talk</a>' +
      "</nav></div>";
    var btn = header.querySelector(".menu-btn");
    var nav = header.querySelector(".nav");
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.textContent = open ? "Close" : "Menu";
    });
  }

  /* ---------- Footer ---------- */
  var footer = document.querySelector("[data-footer]");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="wrap footer-grid">' +
      '<div><a class="brand" href="index.html">' + mark + "<span>" + esc(S.chapter) + "</span></a>" +
      "<p>The Dallas–Fort Worth chapter of null, the open security community. Free to attend, run by volunteers.</p>" +
      '<p><a href="mailto:' + esc(S.email) + '">' + esc(S.email) + "</a></p></div>" +
      "<div><h4>Chapter</h4><ul>" +
      NAV.slice(1).map(function (n) { return '<li><a href="' + n[0] + '">' + n[1] + "</a></li>"; }).join("") +
      "</ul></div>" +
      "<div><h4>Follow</h4><ul>" +
      (S.social || []).map(function (s) { return '<li><a href="' + esc(s.url) + '" rel="noopener">' + esc(s.name) + "</a></li>"; }).join("") +
      "</ul></div>" +
      "<div><h4>null</h4><ul>" +
      '<li><a href="' + esc(S.links.nullCommunity) + '" rel="noopener">null.community</a></li>' +
      '<li><a href="' + esc(S.links.codeOfConduct) + '">Code of conduct</a></li>' +
      '<li><a href="' + esc(S.links.propose) + '">Propose a talk</a></li>' +
      "</ul></div></div>" +
      '<div class="wrap footer-base"><span>&copy; ' + new Date().getFullYear() + " " + esc(S.chapter) +
      ". Part of null.community.</span><span>" + esc(S.hashtag) + "</span></div>";
  }

  /* ---------- Config-driven links ---------- */
  document.querySelectorAll("[data-href]").forEach(function (a) {
    var url = S.links[a.getAttribute("data-href")];
    if (url) a.setAttribute("href", url);
  });
  document.querySelectorAll("[data-email]").forEach(function (a) {
    a.setAttribute("href", "mailto:" + S.email);
    if (!a.textContent.trim()) a.textContent = S.email;
  });

  /* ---------- Events ---------- */
  var today = new Date(); today.setHours(0, 0, 0, 0);
  var upcoming = EVENTS.filter(function (e) { return toDate(e.date) >= today; })
    .sort(function (a, b) { return toDate(a.date) - toDate(b.date); });
  var past = EVENTS.filter(function (e) { return toDate(e.date) < today; })
    .sort(function (a, b) { return toDate(b.date) - toDate(a.date); });

  function eventRow(e, isPast) {
    var d = toDate(e.date);
    var action;
    if (isPast) {
      action = e.recap
        ? '<a class="btn btn-line" href="' + esc(e.recap) + '">Read the recap</a>'
        : (e.attended ? '<span class="attended"><b>' + esc(e.attended) + "</b> attended</span>" : "");
    } else {
      action = e.rsvp
        ? '<a class="btn btn-ink" href="' + esc(e.rsvp) + '" rel="noopener">RSVP</a>'
        : '<span class="muted">RSVP opens soon</span>';
    }
    return (
      '<li class="event' + (isPast ? " past" : "") + '">' +
      '<div class="event-date"><span class="m">' + fmt(d, { month: "short" }) + '</span><span class="d">' + d.getDate() + "</span></div>" +
      '<div class="event-body"><span class="event-tag tag-' + slug(e.type) + '">' + esc(e.type) + "</span>" + (e.sample ? sampleBadge : "") +
      "<h3>" + esc(e.title) + "</h3>" +
      '<p class="event-meta">' + fmt(d, { weekday: "long", month: "long", day: "numeric", year: "numeric" }) +
      (e.time ? ", " + esc(e.time) : "") + "<br>" + esc(e.venue) + "</p>" +
      (e.summary ? '<p class="event-summary">' + esc(e.summary) + "</p>" : "") +
      "</div>" +
      '<div class="event-action">' + action + "</div></li>"
    );
  }

  document.querySelectorAll("[data-events]").forEach(function (el) {
    var isPast = el.getAttribute("data-events") === "past";
    var list = isPast ? past : upcoming;
    var limit = parseInt(el.getAttribute("data-limit"), 10);
    if (limit) list = list.slice(0, limit);
    el.innerHTML = list.length
      ? list.map(function (e) { return eventRow(e, isPast); }).join("")
      : '<li class="empty">' + esc(el.getAttribute("data-empty") || "Nothing here yet.") + "</li>";
  });

  var next = document.querySelector("[data-next-event]");
  if (next) {
    var e = upcoming[0];
    if (e) {
      var d = toDate(e.date);
      next.innerHTML =
        '<p class="ticket-label">Next meet' + (e.sample ? " " + sampleBadge : "") + "</p>" +
        '<p class="ticket-date">' + fmt(d, { month: "short", day: "numeric" }) +
        '<span>' + fmt(d, { weekday: "long" }) + "</span></p>" +
        '<h2 class="ticket-title">' + esc(e.title) + "</h2>" +
        '<p class="ticket-meta">' + esc(e.time) + "<br>" + esc(e.venue) + "</p>" +
        (e.rsvp
          ? '<a class="btn btn-amber" href="' + esc(e.rsvp) + '" rel="noopener">RSVP for free</a>'
          : '<p class="muted-light">RSVP opens soon. Follow us to hear first.</p>');
    } else {
      next.innerHTML =
        '<p class="ticket-label">Next meet</p><h2 class="ticket-title">Being planned now.</h2>' +
        '<p class="ticket-meta">Follow the chapter to hear about the date and venue as soon as they’re set.</p>' +
        '<a class="btn btn-amber" href="#follow">Follow null Dallas</a>';
    }
  }

  /* ---------- Social ---------- */
  document.querySelectorAll("[data-social]").forEach(function (el) {
    el.innerHTML = (S.social || []).map(function (s) {
      return '<a class="social" href="' + esc(s.url) + '" rel="noopener"><strong>' + esc(s.name) + "</strong><span>" + esc(s.note) + "</span></a>";
    }).join("");
  });

  /* ---------- Team ---------- */
  document.querySelectorAll("[data-team]").forEach(function (el) {
    el.innerHTML = TEAM.map(function (m) {
      var initials = m.name.split(/\s+/).map(function (w) { return w[0]; }).join("").slice(0, 2).toUpperCase();
      var avatar = m.photo
        ? '<img class="avatar" src="' + esc(m.photo) + '" alt="" loading="lazy">'
        : '<span class="avatar" aria-hidden="true">' + esc(initials) + "</span>";
      return '<article class="member">' + avatar +
        "<h3>" + esc(m.name) + (m.sample ? " " + sampleBadge : "") + "</h3>" +
        '<p class="role">' + esc(m.role) + "</p>" +
        (m.linkedin ? '<a href="' + esc(m.linkedin) + '" rel="noopener">LinkedIn profile</a>' : "") +
        "</article>";
    }).join("");
  });

  /* ---------- Skyline: windows light up once on load ---------- */
  var sky = document.querySelector(".skyline");
  if (sky) {
    var NS = "http://www.w3.org/2000/svg";
    var layer = sky.querySelector("#windows");
    var seed = 7;
    function rand() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
    sky.querySelectorAll(".bldg").forEach(function (b) {
      var box = b.getBBox();
      for (var y = box.y + 14; y < box.y + box.height - 8; y += 12) {
        for (var x = box.x + 6; x < box.x + box.width - 6; x += 9) {
          if (rand() > 0.32) continue;
          var w = document.createElementNS(NS, "rect");
          w.setAttribute("x", x.toFixed(1));
          w.setAttribute("y", y.toFixed(1));
          w.setAttribute("width", "3");
          w.setAttribute("height", "5");
          w.setAttribute("class", "win");
          w.style.setProperty("--d", (0.4 + rand() * 1.8).toFixed(2) + "s");
          w.style.setProperty("--o", (0.35 + rand() * 0.6).toFixed(2));
          layer.appendChild(w);
        }
      }
    });
    requestAnimationFrame(function () { sky.classList.add("lit"); });
  }
})();
