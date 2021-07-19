class Portfolio < ApplicationRecord
  belongs_to :user
  has_many :tags
  has_many :portfolio_tags
  has_many :favorites
  has_many :messages
  has_one_attached :image

end
