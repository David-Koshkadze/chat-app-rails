import consumer from "./consumer";

function scroll_bottom(element) {}

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("connected");
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log(data);
    const messagesContainer = document.querySelector("#message_container");
    const messagesWrapper = document.querySelector("#message_wrapper");

    messagesContainer.innerHTML += data.html_message;

    document.querySelector("#message_body").value = "";

    console.log(messagesContainer.offsetTop);

    messagesWrapper.scroll({
      top: messagesWrapper.scrollHeight,
      left: 0,
      behavior: "smooth",
    });
  },
});
