/* Handel-Walther – Sprache, Navigation, Animationen, Kontaktformular */
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");

  /* ---------------------------------------------------------------------
     Übersetzungen. Elemente mit data-i18n="key" erhalten den Text (HTML),
     data-i18n-placeholder / data-i18n-aria / data-i18n-content die Attribute.
     Lange Rechtstexte stehen direkt im HTML in [data-lang="de|en"]-Blöcken.
     --------------------------------------------------------------------- */
  var T = {
    de: {
      "skip": "Zum Inhalt springen",
      "nav.home": "Start",
      "nav.services": "Leistungen",
      "nav.about": "Über uns",
      "nav.contact": "Kontakt",
      "nav.menu": "Menü öffnen",
      "cta.contact": "Kontakt aufnehmen",
      "cta.services": "Leistungen",

      "home.title": "Handel-Walther – Import & Vertrieb",
      "home.desc": "Handel-Walther ist ein inhabergeführtes Handelsunternehmen aus Sachsen für Import und Vertrieb von Waren in Zentraleuropa.",
      "hero.eyebrow": "Import & Vertrieb",
      "hero.title": "Ihr Handelspartner in Zentraleuropa.",
      "hero.lead": "Handel-Walther ist ein inhabergeführtes Handelsunternehmen aus Sachsen. Wir importieren Waren und vertreiben sie an Geschäftskunden in Deutschland und den Nachbarländern.",

      "svc.eyebrow": "Leistungen",
      "svc.title": "Was wir für Sie tun.",
      "svc.1.t": "Import",
      "svc.1.d": "Wir beziehen Waren von Herstellern und Lieferanten und bringen sie auf den europäischen Markt.",
      "svc.2.t": "Vertrieb",
      "svc.2.d": "Wir liefern an Händler und Gewerbekunden in Deutschland und im angrenzenden Ausland.",
      "svc.3.t": "Beschaffung auf Anfrage",
      "svc.3.d": "Sie suchen ein bestimmtes Produkt? Sprechen Sie uns an – wir prüfen, ob wir es für Sie beschaffen können.",

      "about.eyebrow": "Über uns",
      "about.title": "Klein, persönlich, verbindlich.",
      "about.p1": "Handel-Walther ist ein Einzelunternehmen unter der Leitung von Ronald Walther. Sie haben einen festen Ansprechpartner, kurze Wege und klare Absprachen.",
      "about.p2": "Wir verstehen uns als zuverlässiger Partner für Unternehmen, die Waren beziehen oder neue Absatzwege in Zentraleuropa suchen.",

      "cta.title": "Sprechen Sie uns an.",
      "cta.text": "Wir freuen uns auf Ihre Anfrage – telefonisch oder per E-Mail.",
      "cta.call": "Anrufen",
      "cta.mail": "E-Mail schreiben",

      "contact.title": "Kontakt – Handel-Walther",
      "contact.desc": "Nehmen Sie Kontakt mit Handel-Walther auf – per Telefon, E-Mail oder über das Kontaktformular.",
      "contact.eyebrow": "Kontakt",
      "contact.h1": "Kontakt",
      "contact.lead": "Schreiben Sie uns oder rufen Sie einfach an. Wir melden uns so schnell wie möglich.",
      "contact.card.t": "So erreichen Sie uns",
      "contact.phone": "Telefon",
      "contact.mail": "E-Mail",
      "form.title": "Nachricht senden",
      "form.name": "Name",
      "form.company": "Firma",
      "form.email": "E-Mail",
      "form.phone": "Telefon",
      "form.subject": "Betreff",
      "form.message": "Ihre Nachricht",
      "form.hint": "Beim Absenden öffnet sich Ihr E-Mail-Programm mit der vorbereiteten Nachricht an info@handel-walther.de. Die Nachricht wird erst verschickt, wenn Sie sie dort absenden.",
      "form.submit": "Nachricht senden",
      "form.ok": "Ihr E-Mail-Programm wurde geöffnet. Bitte senden Sie die Nachricht dort ab. Falls sich nichts geöffnet hat, schreiben Sie uns direkt an <a href=\"mailto:info@handel-walther.de\">info@handel-walther.de</a>.",
      "form.mail.subject": "Anfrage über handel-walther.de",
      "form.required": "Pflichtfelder",

      "imprint.title": "Impressum – Handel-Walther",
      "imprint.h1": "Impressum",
      "privacy.title": "Datenschutz – Handel-Walther",
      "privacy.h1": "Datenschutzerklärung",
      "legal.eyebrow": "Rechtliches",

      "footer.tagline": "Import und Vertrieb von Waren in Zentraleuropa.",
      "footer.contact": "Kontakt",
      "footer.pages": "Seiten",
      "footer.imprint": "Impressum",
      "footer.privacy": "Datenschutz"
    },

    en: {
      "skip": "Skip to content",
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.menu": "Open menu",
      "cta.contact": "Get in touch",
      "cta.services": "Services",

      "home.title": "Handel-Walther – Import & Distribution",
      "home.desc": "Handel-Walther is an owner-managed trading company from Saxony, Germany, for the import and distribution of goods in Central Europe.",
      "hero.eyebrow": "Import & Distribution",
      "hero.title": "Your trading partner in Central Europe.",
      "hero.lead": "Handel-Walther is an owner-managed trading company based in Saxony, Germany. We import goods and distribute them to business customers in Germany and neighbouring countries.",

      "svc.eyebrow": "Services",
      "svc.title": "What we do for you.",
      "svc.1.t": "Import",
      "svc.1.d": "We source goods from manufacturers and suppliers and bring them to the European market.",
      "svc.2.t": "Distribution",
      "svc.2.d": "We supply retailers and business customers in Germany and neighbouring countries.",
      "svc.3.t": "Sourcing on request",
      "svc.3.d": "Looking for a specific product? Get in touch – we will check whether we can source it for you.",

      "about.eyebrow": "About us",
      "about.title": "Small, personal, reliable.",
      "about.p1": "Handel-Walther is a sole proprietorship run by Ronald Walther. You have one dedicated contact, short lines of communication and clear agreements.",
      "about.p2": "We see ourselves as a reliable partner for companies looking to source goods or find new sales channels in Central Europe.",

      "cta.title": "Get in touch.",
      "cta.text": "We look forward to your enquiry – by phone or e-mail.",
      "cta.call": "Call us",
      "cta.mail": "Send an e-mail",

      "contact.title": "Contact – Handel-Walther",
      "contact.desc": "Get in touch with Handel-Walther – by phone, e-mail or via the contact form.",
      "contact.eyebrow": "Contact",
      "contact.h1": "Contact",
      "contact.lead": "Write to us or simply give us a call. We will get back to you as soon as possible.",
      "contact.card.t": "How to reach us",
      "contact.phone": "Phone",
      "contact.mail": "E-mail",
      "form.title": "Send a message",
      "form.name": "Name",
      "form.company": "Company",
      "form.email": "E-mail",
      "form.phone": "Phone",
      "form.subject": "Subject",
      "form.message": "Your message",
      "form.hint": "When you submit, your e-mail program opens with the prepared message to info@handel-walther.de. Nothing is sent until you send it from there.",
      "form.submit": "Send message",
      "form.ok": "Your e-mail program has been opened. Please send the message from there. If nothing opened, write to us directly at <a href=\"mailto:info@handel-walther.de\">info@handel-walther.de</a>.",
      "form.mail.subject": "Enquiry via handel-walther.de",
      "form.required": "Required fields",

      "imprint.title": "Legal Notice – Handel-Walther",
      "imprint.h1": "Legal Notice",
      "privacy.title": "Privacy Policy – Handel-Walther",
      "privacy.h1": "Privacy Policy",
      "legal.eyebrow": "Legal",

      "footer.tagline": "Import and distribution of goods in Central Europe.",
      "footer.contact": "Contact",
      "footer.pages": "Pages",
      "footer.imprint": "Legal notice",
      "footer.privacy": "Privacy"
    }
  };

  var root = document.documentElement;

  function storedLang() {
    try { return localStorage.getItem("hw-lang"); } catch (e) { return null; }
  }
  function saveLang(l) {
    try { localStorage.setItem("hw-lang", l); } catch (e) { /* ignore */ }
  }
  function detectLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "de" || q === "en") return q;
    var s = storedLang();
    if (s === "de" || s === "en") return s;
    return (navigator.language || "de").toLowerCase().indexOf("de") === 0 ? "de" : "en";
  }

  function applyLang(lang) {
    var dict = T[lang];
    root.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = dict[el.getAttribute("data-i18n")];
      if (v != null) el.innerHTML = v;
    });
    [["data-i18n-placeholder", "placeholder"], ["data-i18n-aria", "aria-label"], ["data-i18n-content", "content"]].forEach(function (pair) {
      document.querySelectorAll("[" + pair[0] + "]").forEach(function (el) {
        var v = dict[el.getAttribute(pair[0])];
        if (v != null) el.setAttribute(pair[1], v);
      });
    });
    var titleKey = document.body.getAttribute("data-title");
    if (titleKey && dict[titleKey]) document.title = dict[titleKey];
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-set-lang") === lang));
    });
  }

  var current = detectLang();
  applyLang(current);
  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () {
      current = b.getAttribute("data-set-lang");
      saveLang(current);
      applyLang(current);
    });
  });

  /* ---------- Header: beim Scrollen hinterlegen ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("is-solid", window.scrollY > 40); }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile Navigation ---------- */
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    document.querySelectorAll(".nav ul a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------- Scroll-Reveal ---------- */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Jahr im Footer ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Kontaktformular: öffnet das E-Mail-Programm mit vorbereiteter Nachricht ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var d = T[current];
      var f = form.elements;
      var lines = [
        f.message.value.trim(),
        "",
        "—",
        d["form.name"] + ": " + f.name.value.trim()
      ];
      if (f.company.value.trim()) lines.push(d["form.company"] + ": " + f.company.value.trim());
      lines.push(d["form.email"] + ": " + f.email.value.trim());
      if (f.phone.value.trim()) lines.push(d["form.phone"] + ": " + f.phone.value.trim());
      var subject = f.subject.value.trim() || d["form.mail.subject"];
      location.href = "mailto:info@handel-walther.de?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(lines.join("\n"));
      status.className = "form-status ok";
      status.innerHTML = d["form.ok"];
    });
  }
})();
