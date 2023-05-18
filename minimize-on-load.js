<!-- Start of ChatBot Custom Integration code -- Dependent on widget.js and custom.js code -->
<script>

// The chatbot instance
window.BE_API = window.BE_API || {};

/**
 * Runs when chatbot loads.
 * Hack function to ensure that the chatbot is always minimized by default.
 */
window.BE_API.onLoad = function ()
{
  // The chatbot instance
  var chatbot = window.BE_API || {};

  // Hide the entire chat window right away.
  hideChat();
  
  // Wait a split second and then close the chat window by default. We wait to allow time for the chatbot to initialize.
  setTimeout(function()
  {
    // Get whether chat window is open
      var isChatWindowOpen = chatbot.isChatWindowOpened();
    
    // Close the chatbot window if it is not already closed
    if(isChatWindowOpen)
    {
      // Close/Minimize the chatbot window while it is still hidden (not visible)
      closeChat();
      
      // Wait half a second more and show/display closed chat (make it visible). 
        setTimeout(function()
      {
        showChat();
        }, 500); // Half a second is the perfect time to see the chatbot appearance animation.
      
    }else
    {
      // The chatbot is already closed/minimized. Show it right away.
      showChat();
    }

    }, 100); // 100 milliseconds is the shortest time to allow the chatbot to first initialize before checking it's state.
};
 
</script>
<!-- End of ChatBot Custom Integration code -->
