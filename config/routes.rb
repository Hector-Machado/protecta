Rails.application.routes.draw do
  resources :home
  # Define a rota raiz ("/") para o controller e action desejado
  root "home#index"
end
