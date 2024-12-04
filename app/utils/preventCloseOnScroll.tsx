// export const preventCloseOnScroll = (): void => {
//     let startY = 0;
  
//     // Prevent swipe down gesture
//     document.addEventListener(
//       "touchstart",
//       (event: TouchEvent) => {
//         startY = event.touches[0].clientY;
//       },
//       { passive: true }
//     );
  
//     document.addEventListener(
//       "touchmove",
//       (event: TouchEvent) => {
//         const deltaY = event.touches[0].clientY - startY;
//         if (deltaY > 50) {
//           // Prevent swipe down that might close the app
//           event.preventDefault();
//         }
//       },
//       { passive: false }
//     );
  
//     // Ensure the Telegram WebApp is properly initialized
//     if (window.Telegram?.WebApp) {
//       const tg = window.Telegram.WebApp;
  
//       tg.ready();
  
//       // Call expand only if it exists
//       if (tg.expand) {
//         tg.expand();
//       }
  
//       // Add back button functionality
//       if (tg.BackButton) {
//         tg.BackButton.show(); // Show the back button
//         tg.BackButton.onClick(() => {
//           // Define what happens when the back button is clicked
//           console.log("Back button clicked!");
//           window.history.back(); // Navigate to the previous page
//         });
//       }
//     }
//   };
  