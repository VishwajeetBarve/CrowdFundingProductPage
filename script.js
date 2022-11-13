// DOM
/* Toggle */
const toggleState = document.querySelector(".toggle-state");
const toggler = document.querySelector(".nav-bar");

/* Nav Dropdown */
const navDropdown = document.querySelector(".nav-bar__dropdown");
const body = document.querySelector("body");

/* Bookmark Status */
const bookmarkStatus = document.querySelector(".bookmark-status");
const bookmarkColor = document.querySelector(".bookmark-desktop");

/* Amount and People backing */
const amountBacked = document.querySelector(".total-amount");
const noOfPeople = document.querySelector(".total-people");

/* Back-Project Modal PopUp*/

const backProjectBtn = document.querySelector(".backproject-btn");
const backProjectModal = document.querySelector(".project-backing__modal");

// Functions
function removeBorder() {
  products.forEach((product) => {
    product.style.border = "";
    product.lastElementChild.style.display = "none";
  });
  document.querySelectorAll(".radio-inputs").forEach((radioInput) => {
    radioInput.checked = false;
  });
}

// Variables
let userPledge = 0;

/* Back Project Modal Made Visible */

backProjectBtn.addEventListener("click", function () {
  // Removes Existing Border
  removeBorder();

  backProjectModal.style.visibility = "visible";
  document.querySelectorAll(".modal-divider").forEach((divider) => {
    divider.style.visibility = "hidden";
  });
});

// Close the Modal Button.

const closeModal = document.querySelector(".close-modal");

// Resets everything to their original value.

closeModal.addEventListener("click", function () {
  backProjectModal.style.visibility = "hidden";
  removeBorder();
});

// Bookmark status based on the screen type

if (screen.width <= 375) {
  toggler.addEventListener("click", function () {
    toggler.classList.toggle("toggle-enabled");
  });
} else {
  toggleState.remove();
  bookmarkStatus.addEventListener("click", function () {
    if ((bookmarkStatus.textContent = "Bookmark")) {
      bookmarkStatus.textContent = "Bookmarked";
      bookmarkColor.style.backgroundColor = "hsl(176, 50%, 47%)";
    } else {
      bookmarkStatus.textContent = "Bookmark";
    }
  });
}

// Modal Manipulation

const products = document.querySelectorAll(".product-modal");

products.forEach((product) => {
  if (!product.classList.contains("stock-out")) {
    product.addEventListener("click", function () {
      products.forEach((productClicked) => {
        if (productClicked === product) {
          productClicked.querySelector(".continue-btn").removeEventListener;
          //  Checks which element is clicked

          // Changes its property
          if (screen.width <= 375) {
            productClicked.lastElementChild.style.display = "flex";
            productClicked.lastElementChild.style.flexDirection = "column";
          }
          // Border is set on clicked element
          productClicked.style.border = "1px solid black";
          productClicked.lastElementChild.style.display = "flex";

          // Radio Input
          productClicked.querySelector(".radio-inputs").checked = true;

          // Suggested Pledge

          if (productClicked.querySelector(".min-pledge")) {
            productClicked
              .querySelector(".min-pledge")
              .addEventListener("click", function () {
                productClicked.querySelector(".user-input").value =
                  productClicked.querySelector(".min-pledge").innerText;
              });
          }
        } else {
          productClicked.style.border = "none";
          productClicked.lastElementChild.style.display = "none";

          productClicked.querySelector(".radio-inputs").checked = false;
        }
      });
    });
  }
});

// Continue Button Functionality

document.querySelectorAll(".continue-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".user-input").forEach((input) => {
      if (input.value > "" && input.value > 0) {
        userPledge = input.value;
        input.value = 0;
        amountBacked.textContent = (
          Number(amountBacked.textContent.replace(/,/g, "")) +
          Number(userPledge)
        ).toLocaleString("en-US");
        noOfPeople.textContent = (
          Number(noOfPeople.textContent.replace(/,/g, "")) + 1
        ).toLocaleString("en-US");

        backProjectModal.style.visibility = "hidden";
        document.querySelector(".thankyou-modal").style.visibility = "visible";
      }
    });
  });
});

// Thank You State Got It Button.
const gotItBtn = document.querySelector(".confirm-btn");

gotItBtn.addEventListener("click", function () {
  document.querySelector(".thankyou-modal").style.visibility = "hidden";
});
