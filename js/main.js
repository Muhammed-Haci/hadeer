let progress = document.querySelector(".progres");
(progressBar = document.querySelectorAll(".progress-bar")),
  (icon = document.querySelectorAll(".icon")),
  (counter = document.querySelector(".counter")),
  (countersTag = document.querySelectorAll(".counter h3"));

ScrollOut({
  targets: ".progres, .counter",
});

//
window.addEventListener("scroll", function () {
  //Progress
  if (progress.dataset.scroll == "in") {
    progressBar.forEach((el) => {
      let valueNow = el.getAttribute("aria-valuenow");
      el.style.width = valueNow + "%";
      let CounterSpan = el.parentElement.parentElement.querySelector(
        ".progress-value span"
      );
      let timer = setInterval(() => {
        if (Number(CounterSpan.textContent) < valueNow) {
          CounterSpan.textContent = Number(CounterSpan.textContent) + 1;
        } else {
          clearInterval(timer);
        }
      }, 500);
    });
  } else {
    progressBar.forEach((el) => {
      el.style.width = 0 + "%";
      el.parentElement.parentElement.querySelector(
        ".progress-value span"
      ).textContent = 0;
    });
  }
  //Counter
  if (counter.dataset.scroll == "in") {
    countersTag.forEach((el) => {
      let time = setInterval(() => {
        if (Number(el.innerText) < el.dataset.counter) {
          el.innerText = Number(el.innerText) + 1;
        } else {
          clearInterval(time);
        }
      }, 1000);
    });
  } else {
    countersTag.forEach((el) => {
      el.innerText = 0;
    });
  }
});

/*************Filter Items ***********/
const filterListItems = document.querySelectorAll(".list-group li"),
  filteredItems = document.querySelectorAll(".filtered-items a");

filterListItems.forEach((list) => {
  list.addEventListener("click", () => {
    document.querySelector(".list-group li.active").classList.remove("active");
    list.classList.add("active");
    let FilteredValue = list.dataset.filter;
    filteredItems.forEach((item) => {
      if (item.classList.contains(FilteredValue)) {
        item.classList.remove("hidden");
        item.classList.add("active");
      } else {
        item.classList.remove("active");
        item.classList.add("hidden");
      }
    });
  });
});

//Light Gallery
lightGallery(document.getElementById("filter"), {});

// init AOS
AOS.init();

// --------- scroll to the top Function:

let scrollUp = document.querySelector(".scroll-up");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
};

scrollUp.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
