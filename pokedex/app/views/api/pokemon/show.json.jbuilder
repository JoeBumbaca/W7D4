json.pokemon do 
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :item_ids, :image_url
end

json.items do 
  @pokemon.items.each do |item|
    json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
  end
end