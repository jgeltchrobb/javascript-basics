class CreateTweets < ActiveRecord::Migration[5.2]
  def change
    create_table :tweets do |t|
      t.string :content
      t.boolean :fav

      t.timestamps
    end
  end
end
