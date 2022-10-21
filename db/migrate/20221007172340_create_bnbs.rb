class CreateBnbs < ActiveRecord::Migration[7.0]
  def change
    create_table :bnbs do |t|
      t.string :name
      t.string :street
      t.string :city
      t.string :state
      t.string :coordinates
      t.string :summary
      t.string :image_url
      t.integer :price

      t.timestamps
    end
  end
end
