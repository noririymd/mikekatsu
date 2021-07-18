class CreatePortfolios < ActiveRecord::Migration[6.0]
  def change
    create_table :portfolios do |t|
      t.string :portfolio_url, null: false
      t.string :name, null: false
      t.text :description, null: false
      t.string :language, null: false
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
