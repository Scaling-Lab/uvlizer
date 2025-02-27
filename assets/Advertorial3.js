 document.addEventListener("scroll", (event) => {
  var scrolValue = window.scrollY;
   if (scrolValue > 1200) {
     document.querySelector("#shopify-section-Advertorial3 > section > div.Right-Side-abc").classList.add("scrolled")
   } else {
     document.querySelector("#shopify-section-Advertorial3 > section > div.Right-Side-abc").classList.remove("scrolled")
   }
 });