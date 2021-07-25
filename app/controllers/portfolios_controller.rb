class PortfoliosController < ApplicationController

  def index
  end

  def new
    @portfolio = Portfolio.new
  end

  def create
    @portfolio = Portfolio.new(portfolio_params)
    binding.pry
    if @portfolio.save
      return redirect_to root_path
    else
      render 'new'
    end
  end


  private

  def portfolio_params
    params.require(:portfolio).permit(:portfolio_url, :name, :description, :language, images:[]).merge(user_id: current_user.id)
  end

end
