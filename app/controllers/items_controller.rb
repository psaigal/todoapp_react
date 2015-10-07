class ItemsController < ApplicationController
  def index
    # Fetch all posts
    @items = Item.all
  end
end
