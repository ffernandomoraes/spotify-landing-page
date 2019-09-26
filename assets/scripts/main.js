$(document).ready(() => {

   // ao rolar a página
   $(window).scroll(() => {
      changeBackgroundHeader();
   });

   // ao alterar as proporções do browser
   $(window).resize(() => {
      changeBackgroundHeader();
   });

   changeBackgroundHeader();
});



// efeito background header
function changeBackgroundHeader() {
   const header = $('header');
   const offesetY = $(window).scrollTop();
   const mlt = 0.5;

   if (offesetY > (header.height() * mlt)) {
      header.addClass('--background-black');
      return;
   }

   header.removeClass('--background-black');
}
