// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

import "flowbite";
import "./channels/index";

// when windows load

const messagesWrapper = document.querySelector("#message_wrapper");

function scrollToBottom(element) {
  element.scroll({
    top: element.scrollHeight,
    left: 0,
    behavior: "smooth",
  });
}

window.onload(scrollToBottom(messagesWrapper));
