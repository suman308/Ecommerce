
    json.partial! "api/products/product", product: @product
    json.imageUrls @product.images.map {|file| url_for(file)}
   
# json.products do 
#     json.set! @product.id do 
#         json.partial! 'api/products/product', product: @product
#         json.photoUrls @product.photos.map { |file| url_for(file) }
#     end
# end