class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      flash[:success] = "You have successfully logged in"
      redirect_to root_path
    else
      flash.now[:error] = "There are errors to login"
      render "new", status: 422
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:info] = "You have logged out"
    redirect_to login_path
  end
end
