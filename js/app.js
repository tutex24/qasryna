// ============================================================================
// APP — page routing, DOM building, and event wiring.
// ============================================================================
// You shouldn't need to edit this file to add or remove a project — see
// js/projects.js (and optionally js/case-studies.js) for that instead.
// ============================================================================
(function () {
  "use strict";

  function findProject(name) {
    return projects.find(function (project) {
      return project.name === name;
    });
  }

  var VIDEO_EXTENSIONS = [".mp4", ".mov", ".webm"];

  function isVideoFile(path) {
    return VIDEO_EXTENSIONS.some(function (ext) {
      return path.toLowerCase().endsWith(ext);
    });
  }

  // Builds one <article class="grid-item"> thumbnail for a project, wired
  // up to open that project's page when clicked. Motion projects' `thumb`
  // is often a video file rather than an image — those get a silent,
  // looping preview instead of a static <img>.
  function createGridItem(project) {
    var article = document.createElement("article");
    article.className = "grid-item";
    article.dataset.project = project.name;

    var media;
    if (isVideoFile(project.thumb)) {
      media = document.createElement("video");
      media.src = project.thumb;
      media.muted = true;
      media.loop = true;
      media.autoplay = true;
      media.playsInline = true;
    } else {
      media = document.createElement("img");
      media.src = project.thumb;
      media.alt = project.alt || project.name;
    }

    var label = document.createElement("span");
    label.className = "grid-item-label";
    label.textContent = project.name;

    article.appendChild(media);
    article.appendChild(label);
    article.addEventListener("click", function () {
      loadProject(project.name);
    });

    return article;
  }

  // Fills each sidebar category's sublist AND its own page grid (e.g.
  // Graphic Design, Motion) with the projects tagged for that category.
  function buildCategoryGrids() {
    document.querySelectorAll(".nav-category").forEach(function (category) {
      var categoryId = category.dataset.category;
      var sublist = category.querySelector(".nav-sublist");
      var pageGrid = document.querySelector(
        '[data-page-id="' + categoryId + '"] .grid',
      );

      projects
        .filter(function (project) {
          return project.category === categoryId;
        })
        .forEach(function (project) {
          if (sublist) {
            var li = document.createElement("li");
            var link = document.createElement("a");

            link.href = "#project";
            link.className = "nav-link nav-sublink";
            link.dataset.page = "project";
            link.dataset.project = project.name;
            link.textContent = project.name;

            li.appendChild(link);
            sublist.appendChild(li);
          }

          if (pageGrid && project.thumb) {
            pageGrid.appendChild(createGridItem(project));
          }
        });
    });
  }

  buildCategoryGrids();

  var pages = document.querySelectorAll(".page");
  var navLinks = document.querySelectorAll(".nav-link, .logo");
  var navCategories = document.querySelectorAll(".nav-category");
  var backToTopLinks = document.querySelectorAll('[data-role="back-to-top"]');
  var projectTitleEl = document.querySelector('[data-role="project-title"]');
  var projectBodyEl = document.querySelector('[data-role="project-body"]');

  // A single shared <dialog> (see index.html) reused for whichever image
  // or video was clicked. wireLightboxTriggers() is called again every
  // time a project's HTML is rebuilt, since that content is fresh each
  // time — the dialog itself and its open/close logic only need setting
  // up once.
  var lightbox = document.querySelector('[data-role="media-lightbox"]');
  var lightboxContent = document.querySelector(
    '[data-role="media-lightbox-content"]',
  );
  var lightboxCloseBtn = document.querySelector(
    '[data-role="media-lightbox-close"]',
  );

  // Closing fades/scales the dialog out via the .is-visible transition
  // first, then calls the real close() once that transition finishes —
  // closing immediately would skip straight past the animation.
  function closeLightbox() {
    if (!lightbox || !lightbox.open) return;

    lightbox.classList.remove("is-visible");

    var finish = function () {
      lightbox.removeEventListener("transitionend", finish);
      clearTimeout(fallbackTimer);
      lightbox.close();
    };
    lightbox.addEventListener("transitionend", finish);
    // Safety net in case transitionend never fires (e.g. prefers-reduced-motion).
    var fallbackTimer = setTimeout(finish, 250);
  }

  function openLightbox(sourceEl) {
    if (!lightbox || !lightboxContent) return;

    var clone;
    if (sourceEl.tagName === "VIDEO") {
      clone = document.createElement("video");
      clone.src = sourceEl.currentSrc || sourceEl.src;
      clone.controls = true;
      clone.autoplay = true;
      clone.loop = true;
      clone.playsInline = true;
    } else {
      clone = document.createElement("img");
      clone.src = sourceEl.src;
      clone.alt = sourceEl.alt || "";
    }

    lightboxContent.innerHTML = "";
    lightboxContent.appendChild(clone);
    lightbox.showModal();

    // Wait a frame so the browser paints the starting (invisible) state
    // before adding .is-visible — otherwise the transition has nothing
    // to animate from and just snaps straight to the end state.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        lightbox.classList.add("is-visible");
      });
    });
  }

  function wireLightboxTriggers(root) {
    root.querySelectorAll(".case-masonry video, .case-masonry img").forEach(
      function (media) {
        media.classList.add("is-zoomable");
        media.addEventListener("click", function () {
          openLightbox(media);
        });
      },
    );
  }

  if (lightbox) {
    lightboxCloseBtn.addEventListener("click", closeLightbox);

    // Click on the backdrop (outside the dialog's own box) closes it too.
    lightbox.addEventListener("click", function (event) {
      var rect = lightbox.getBoundingClientRect();
      var clickedInside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      if (!clickedInside) closeLightbox();
    });

    // The Esc key fires "cancel" then would close the dialog instantly —
    // intercept it so Esc gets the same fade-out as every other close path.
    lightbox.addEventListener("cancel", function (event) {
      event.preventDefault();
      closeLightbox();
    });

    lightbox.addEventListener("close", function () {
      lightboxContent.innerHTML = "";
    });
  }

  function activateCategory(categoryName) {
    navCategories.forEach(function (category) {
      var isActive = category.dataset.category === categoryName;
      category.classList.toggle("is-active-section", isActive);

      var toggle = category.querySelector("[data-category-toggle]");
      if (toggle) {
        toggle.classList.toggle("is-active", isActive);
        toggle.setAttribute("aria-expanded", String(isActive));
      }
    });
  }

  function showPage(pageId) {
    pages.forEach(function (page) {
      page.hidden = page.dataset.pageId !== pageId;
    });

    navLinks.forEach(function (link) {
      link.classList.toggle("is-active", link.dataset.page === pageId);
    });

    activateCategory(pageId);

    // Deferred to the next frame so it always wins against the browser's
    // own "scroll this anchor into view" behavior, which fires because
    // these hashes (#graphic-design, #about, etc.) also happen to be real element ids.
    requestAnimationFrame(function () {
      window.scrollTo(0, 0);
    });
  }

  function loadProject(name) {
    var project = findProject(name);
    if (!project) return;

    var caseStudy = caseStudies[project.name];

    projectTitleEl.textContent = project.name;
    projectBodyEl.innerHTML = caseStudy || "<p>" + project.description + "</p>";
    wireLightboxTriggers(projectBodyEl);

    var categoryName = null;

    navLinks.forEach(function (link) {
      var isMatch =
        link.dataset.page === "project" && link.dataset.project === name;
      link.classList.toggle("is-active", isMatch);

      if (isMatch && link.classList.contains("nav-sublink")) {
        var categoryEl = link.closest(".nav-category");
        if (categoryEl) categoryName = categoryEl.dataset.category;
      }
    });

    showPage("project");
    activateCategory(categoryName);
  }

  function route() {
    var hash = window.location.hash.replace("#", "") || "graphic-design";
    var validPages = ["about", "graphic-design", "motion"];

    if (validPages.indexOf(hash) !== -1) {
      showPage(hash);
    } else {
      showPage("graphic-design");
    }
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (link.dataset.page === "project") {
        event.preventDefault();
        loadProject(link.dataset.project);
        return;
      }

      var currentHash =
        window.location.hash.replace("#", "") || "graphic-design";

      if (link.dataset.page === currentHash) {
        // Same page as we're already on — the hash won't change, so
        // hashchange won't fire to reset scroll. Do it ourselves.
        event.preventDefault();
        showPage(link.dataset.page);
      }
    });
  });

  backToTopLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // Mobile burger menu — toggles the fullscreen nav overlay (see the
  // ≤900px tier in css/style.css). Desktop never shows the burger, so
  // this is inert there.
  var navBurger = document.querySelector('[data-role="nav-burger"]');
  var navEl = document.querySelector('[data-role="nav"]');

  function closeNavOverlay() {
    if (!navBurger || !navEl) return;
    navBurger.classList.remove("is-active");
    navEl.classList.remove("is-open");
    navBurger.setAttribute("aria-expanded", "false");
  }

  if (navBurger && navEl) {
    navBurger.addEventListener("click", function () {
      var isOpen = navEl.classList.toggle("is-open");
      navBurger.classList.toggle("is-active", isOpen);
      navBurger.setAttribute("aria-expanded", String(isOpen));
    });

    // Every nav click already leads somewhere (a page, a project, or a
    // category — none of them are pure "expand in place" toggles), so
    // the overlay should always close behind it.
    navEl.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", closeNavOverlay);
    });

    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeNavOverlay();
    });
  }

  window.addEventListener("hashchange", route);

  route();
})();
