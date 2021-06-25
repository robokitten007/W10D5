

json.pokemon do 
    json.set! @pokemon.id do
        json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type, :image_url
    end 
end 

json.moves do

    json.set! @pokemon.id do
    @pokemon.moves.each do |move|
    json.extract! move, :id, :name
    end 
end 
end 

json.items do 
    json.set! @pokemon.id do
    @pokemon.items.each do |item|
    json.extract! item, :id, :pokemon_id, :name, :price, :happiness, :image_url
    end 

end 
end 