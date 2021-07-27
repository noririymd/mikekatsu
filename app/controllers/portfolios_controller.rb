class PortfoliosController < ApplicationController
  before_action :set_portfolio, only: [:show, :edit, :update, :destroy]

  def index
    @portfolios = Portfolio.all.order(created_at: :desc)
  end

  def new
    @portfolio = Portfolio.new
  end

  def create
    @portfolio = Portfolio.new(portfolio_params)
    if @portfolio.save
      return redirect_to root_path
    else
      render 'new'
    end
  end

  def show
  end

  def edit
  end

  def update
    if @portfolio.update(portfolio_params)
      return redirect_to portfolio_path(@portfolio)
    else
      render 'edit'
    end
  end

  def destroy
    if @portfolio.destroy
      return redirect_to root_path
    else
      render 'show'
    end
  end

  private

  def portfolio_params
    params.require(:portfolio).permit(:portfolio_url, :name, :description, :language, images:[]).merge(user_id: current_user.id)
  end

  def set_portfolio
    @portfolio = Portfolio.find(params[:id])
  end
end
