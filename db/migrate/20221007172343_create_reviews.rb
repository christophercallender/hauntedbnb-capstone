class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :guest, null: false, foreign_key: true
      t.references :bnb, null: false, foreign_key: true
      t.references :reservation, null: false, foreign_key: true
      t.string :text
      t.integer :rating

      t.timestamps
    end
  end
end
