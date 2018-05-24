json.extract! tweet, :id, :content, :fav, :created_at, :updated_at
json.url tweet_url(tweet, format: :json)
