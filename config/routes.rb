Rails.application.routes.draw do
  get 'index/vista'
  root 'index#vista'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
