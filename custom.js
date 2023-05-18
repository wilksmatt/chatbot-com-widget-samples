<!-- Start of ChatBot Custom Integration code -- Dependent on widget.js code-->
<script>

// The chatbot instance
window.BE_API = window.BE_API || {};
  
var chatbot = window.BE_API || {};
  
/**
 * Opens/Expands the chatbot window.
 */
function openChat()
{
  // Is that initialized?
  var isInitialized = chatbot.isInitialized();
  
  // Proceed only if chat is initialized
  if(isInitialized)
  {
    // Get whether chat window is open
    var isChatWindowOpen = chatbot.isChatWindowOpened();
    
    // Open the chat window if it is not already opened
    if(!isChatWindowOpen)
    {
      //window.BE_API.openChatWindow();
      chatbot.openChatWindow();
    }

  }
}

/**
 * Closes/Minimizes the chatbot window.
 */
function closeChat()
{
  // Is that initialized?
  var isInitialized = chatbot.isInitialized();
  
  // Proceed only if chat is initialized
  if(isInitialized)
  {
    // Get whether chat window is open
      var isChatWindowOpen = chatbot.isChatWindowOpened();
    
    // Open chat windows if it is not already opened
    if(isChatWindowOpen)
    {
      chatbot.closeChatWindow();
    }
  }
}

/**
 * Makes the chatbot window visible.
 */
function showChat()
{
  var element = document.getElementById("chatbot-chat");
  element.classList.remove("hidden");
}

/**
 * Makes the chatbot window hidden.
 */
function hideChat()
{
  var element = document.getElementById("chatbot-chat");
  element.classList.add("hidden");
}

/**
 * Opens the chatbot window and sends a user message to the chat.
 * @param {string} keywords The user message to send to the chat.
 */
function startChat(message)
{
  // Is that initialized?
  var isInitialized = chatbot.isInitialized();
  
  // Proceed only if chat is initialized
  if(isInitialized)
  {
    // Make sure chat is visible
    showChat();
    
    // Get whether chat window is open
    var isChatWindowOpen = chatbot.isChatWindowOpened();
    
    // Open chat windows if it is not already opened
    if(!isChatWindowOpen)
    {
      chatbot.openChatWindow();
    }

    // Set delay before sending message to chat (2.5 seconds)
    setTimeout(function() {
      
        // Send user message to chat
        window.BE_API.sendMessage({
          message: message,
          postback: message
        });
      
    }, 2500);

  }
}
  
</script>
<!-- End of ChatBot Custom Integration code -->
