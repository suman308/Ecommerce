class Store < ApplicationRecord
    validates :name, presence:true 
    validates :owner_id, presence:true 
    belongs_to :user, foreign_key: :owner_id, class_name: :User

end
