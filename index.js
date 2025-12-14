// ======================================================================
// SUBSCRIPTION CARD TOGGLE LOGIC
// ======================================================================

// Buttons (those green rounded bars)
const singleToggleBtn = document.getElementById("singleToggleBtn");
const doubleToggleBtn = document.getElementById("doubleToggleBtn");

// Card containers
const singleCard = document.getElementById("singleSubscription");
const doubleCard = document.getElementById("doubleSubscription");

// Add To Cart (shared)
const addToCartBtn = document.getElementById("addToCartBtn");


// --------------------------------------------------------
// SHOW SINGLE SUBSCRIPTION
// --------------------------------------------------------
function showSingle() {
  singleCard.style.display = "block";
  doubleCard.style.display = "none";

  // Toggle active button styles
  singleToggleBtn.classList.add("active");
  doubleToggleBtn.classList.remove("active");

  updateCartURL(); // recalc link
}


// --------------------------------------------------------
// SHOW DOUBLE SUBSCRIPTION
// --------------------------------------------------------
function showDouble() {
  singleCard.style.display = "none";
  doubleCard.style.display = "block";

  // Toggle active button styles
  doubleToggleBtn.classList.add("active");
  singleToggleBtn.classList.remove("active");

  updateCartURL(); // recalc link
}


// --------------------------------------------------------
// BUTTON EVENTS
// --------------------------------------------------------
singleToggleBtn.addEventListener("click", showSingle);
doubleToggleBtn.addEventListener("click", showDouble);



// ======================================================================
// UPDATE CART URL BASED ON OPTIONS
// ======================================================================

function updateCartURL() {
  let url = "/cart?";
  
  // --------------------------
  // SINGLE SUBSCRIPTION
  // --------------------------
  if (singleCard.style.display !== "none") {
    
    // fragrance radio
    const fragrance = document.querySelector(
      'input[name="fragranceSingle"]:checked'
    ).value;

    // purchase type
    const purchase = document.querySelector(
      'input[name="purchaseTypeSingle"]:checked'
    ).value;

    url += `type=single&fragrance=${fragrance}&purchase=${purchase}`;
  }


  // --------------------------
  // DOUBLE SUBSCRIPTION
  // --------------------------
  if (doubleCard.style.display !== "none") {
    
    // fragrance 1
    const frag1 = document.querySelector(
      'input[name="fragrance1"]:checked'
    ).value;

    // fragrance 2
    const frag2 = document.querySelector(
      'input[name="fragrance2"]:checked'
    ).value;

    // purchase type
    const purchase = document.querySelector(
      'input[name="purchaseTypeDouble"]:checked'
    ).value;

    url += `type=double&fragrance1=${frag1}&fragrance2=${frag2}&purchase=${purchase}`;
  }

  addToCartBtn.href = url;
}

/*
<button id="singleToggleBtn" class="toggle-btn active">Single Subscription</button>
<button id="doubleToggleBtn" class="toggle-btn">Double Subscription</button>

<div id="singleSubscription">
  <!-- all single card content -->
</div>

<div id="doubleSubscription" style="display:none;">
  <!-- all double card content -->
</div>
*/