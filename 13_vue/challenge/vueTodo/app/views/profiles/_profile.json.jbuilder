json.extract! profile, :id, :name, :city, :phone, :email, :image, :created_at, :updated_at
json.url profile_url(profile, format: :json)
