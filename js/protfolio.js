   // protfolio section
   const protfolioModals = document.querySelectorAll(".protfolio-model");
   const imgCards  = document.querySelectorAll(".img-card");
   const protfolioCloseBtns = document.querySelectorAll(".protfolio-close-btn");
   
   var protfolioModal = function(modalClick){
       protfolioModals[modalClick].classList.add("active");
   }
   
   imgCards.forEach((imgCard , i) => {
       imgCard.addEventListener("click", () => {
           protfolioModal(i);
       });
   });
   
   protfolioCloseBtns.forEach((protfolioCloseBtn) => {
       protfolioCloseBtn.addEventListener("click", () => {
           protfolioModals.forEach((protfolioModalView) => {
               protfolioModalView.classList.remove("active");
           });
       });
   });
       // protfolio section end