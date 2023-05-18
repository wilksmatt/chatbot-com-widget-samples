<!-- Start of ChatBot Custom Integration code -- Dependent on widget.js and custom.js code -->
<script>

// The chatbot instance
window.BE_API = window.BE_API || {};

/**
 * Runs when chatbot loads.
 */
window.BE_API.onLoad = function ()
{
  // The chatbot instance
  //var chatbot = window.BE_API || {};

  // Hide the entire chat window right away.
  hideChat();

  // Listen for scroll events
  window.addEventListener("scroll", myScrollFunc);
  
};

// Funtion to only show the chatbot widget when page scrolls below 800px. Otherwise, widget is hidden.
myScrollFunc = function ()
{
    // Get whether chat window is open
    var isChatWindowOpen = chatbot.isChatWindowOpened();
  
    if(!isChatWindowOpen){
      var y = window.scrollY;
      if (y >= 800) {
        showChat();
      } else {
        hideChat();
      }
    }
};
 
</script>
<!-- End of ChatBot Custom Integration code -->
