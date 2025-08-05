# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# db/seeds.rb
Project.create!(
  title: "Study Abroad Portal",
  description: "Full-stack web app for global university discovery with admission prediction and lead management features.",
  github_url: "https://github.com/yourusername/study-abroad-portal",
  tech_stack: "Ruby on Rails, JavaScript, Pundit, Geolocation, ElasticSearch, Semantic Search",
  project_details: <<~DETAILS
    ◦ Built full-stack web app for global university discovery using Rails and JavaScript.
    ◦ Implemented ElasticSearch with dynamic filters and facets, reducing query latency and improving relevance.
    ◦ Enabled contextual results via Semantic Search, improving match rate by 30%.
    ◦ Created admission prediction module that analyzed academic records to suggest realistic options.
    ◦ Built agency onboarding system with lead management and student interaction tools.
    ◦ Applied role-specific policies using Pundit for secure access control across students, agents, and admins.
  DETAILS
)
