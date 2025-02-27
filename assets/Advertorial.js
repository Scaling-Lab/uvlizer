 document.addEventListener("scroll", (event) => {
  var scrolValue = window.scrollY;
   if (scrolValue > 1200) {
     document.querySelector("#shopify-section-Advertorial > section > div.Right-Side-AA").classList.add("scrolled")
   } else {
     document.querySelector("#shopify-section-Advertorial > section > div.Right-Side-AA").classList.remove("scrolled")
   }
 });