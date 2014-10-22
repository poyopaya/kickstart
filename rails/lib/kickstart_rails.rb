module Kickstart_rails
  class Engine < Rails::Engine
    Rails.application.config.assets.paths << root.join("app", "assets", "images", "stylesheets")
  end
end
