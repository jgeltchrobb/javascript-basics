class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :city
      t.string :phone
      t.string :email
      t.string :image

      t.timestamps
    end
  end
end
