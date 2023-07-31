//Set copyright year to current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;


//Sticky header functionality
const heroHeaderEl = document.querySelector(".heading-primary");

const heroObs = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    //Do when heading-primary is shown, after heading is not shown make header sticky
    root: null,
    threshold: 0,
    rootMargin: "0px",
  }
);
heroObs.observe(heroHeaderEl);

const hiddenObs = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenEls = document.querySelectorAll(".hidden");
hiddenEls.forEach((el) => hiddenObs.observe(el));

//Scroll page with links functionality
heroObs.observe(heroHeaderEl);
// console.log(allLinks);

let allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    console.log(link);
    e.preventDefault();
    const href = link.getAttribute("href");
    //If link points to empty section, smooth scroll to top.
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //If link points to a section, smooth scroll to that section
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
      //If link does not start with #, open link in new tab.
    } else if (!href.startsWith("#")) {
      window.open(link.href, "_blank");
    }
  });
});
