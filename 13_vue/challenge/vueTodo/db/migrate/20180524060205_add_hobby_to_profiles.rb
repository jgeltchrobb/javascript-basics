class AddHobbyToProfiles < ActiveRecord::Migration[5.2]
  def change
    add_reference :profiles, :hobby, foreign_key: true
  end
end
