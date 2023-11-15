class MessagesController < ApplicationController
  before_action :require_user

  def create
    message = current_user.messages.build(message_params)
    if message.save
      broadcast_message(message)
      # render turbo_stream: turbo_stream.append(:messages, message)
    end
  end

  private

  def broadcast_message(message)
    ActionCable.server.broadcast "chatroom_channel", { html_message: render_message(message) }
  end

  def message_params
    params.require(:message).permit(:body)
  end

  def render_message(message)
    render(partial: "message", locals: { message: message })
  end
end
