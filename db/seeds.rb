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
  github_url: "https://github.com/rorong/study_abroad_portal",
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

Project.create!(
  title: "Spina Sell",
  description: "Responsive e-commerce real estate platform with custom OAuth2 login and WebSockets-based real-time UX.",
  tech_stack: "Java Servlets, JSP, JDBC, Ruby on Rails, JavaScript, jQuery, Turbo, Bootstrap, WebSockets, Docker, Nginx, EC2",
  project_details: <<~DETAILS
    ◦ Developed a responsive e-commerce real estate platform using core Java Servlets, JSP, and JDBC with 20+ dynamic property views.
    ◦ Implemented custom OAuth2 login flow (Google, Facebook, Apple) using HTTP-based integrations, reaching 500+ users.
    ◦ Boosted mobile usability by 30% via Bootstrap and responsive design techniques.
    ◦ Enabled real-time UX enhancements through WebSockets, reducing full-page reloads by 80%.
    ◦ Created a lightweight, JSP-based content management system to allow non-technical users to manage static content.
    ◦ Dockerized the Java backend and deployed the application using Nginx and EC2, reducing manual configuration effort.
  DETAILS
)

Project.create!(
  title: "Attributed",
  description: "Single-page Rails app with Turbo Stream, secure OAuth login, and role-based access control.",
  github_url: "https://github.com/yourusername/attributed",
  tech_stack: "Ruby on Rails, JavaScript, jQuery, Turbo, Devise, OmniAuth, Active Admin, Cancancan",
  project_details: <<~DETAILS
    ◦ Created a lightweight single-page experience using Turbo Stream, cutting average load time by 60%.
    ◦ Deployed secure OAuth login with Devise and OmniAuth; onboarded 300+ users in the first month.
    ◦ Built admin dashboard with Active Admin, increasing efficiency of data management by 40%.
    ◦ Implemented access control using Cancancan across 5+ roles, enforcing granular permissions.
  DETAILS
)

Project.create!(
  title: "Soorse",
  description: "Group chat and event management app with real-time messaging, QR invitations, and role-based content access.",
  live_url: "https://soorse.com",
  tech_stack: "Ruby on Rails, JavaScript, Stripe, Sendbird, Sidekiq, Redis, Administrate, GitHub Actions",
  project_details: <<~DETAILS
    ◦ Architected a full-featured group chat and event app with 1,000+ active users and real-time messaging (10,000+ msgs/month).
    ◦ Added QR-based group invitations using RQR, increasing participation by 25%.
    ◦ Enabled multi-user invitations and calendar-integrated events, automating admin workflows by 70%.
    ◦ Boosted user engagement 60% with like/comment features and role-based content access.
    ◦ Managed 50+ groups using a custom super admin dashboard built with Administrate.
    ◦ Integrated Sidekiq and Redis for asynchronous background tasks, and used GitHub Actions for automated testing and deployment.
  DETAILS
)

Project.create!(
  title: "Global CBS",
  description: "Multi-role CRM system with location-based features, task automation, and secure access control.",
  live_url: "https://global.cbs.ge",
  tech_stack: "Ruby on Rails, JavaScript, Pundit, Geolocation, Docker, Cron",
  project_details: <<~DETAILS
    ◦ Built a multi-role CRM system supporting Division Managers, Finance, and C-level users; 2,000+ clients managed.
    ◦ Enforced module-level access via enums and Pundit, ensuring secure workflow boundaries.
    ◦ Delivered task management, approval chains, and internal messaging—streamlining operations by 35%.
    ◦ Powered data-driven decisions via custom dashboards and real-time notifications.
    ◦ Integrated location-based features to optimize field operations, reducing inefficiencies by 20%.
    ◦ Deployed and monitored the CRM with Docker and Cron-based task automation, ensuring high availability and scheduled report generation.
  DETAILS
)
