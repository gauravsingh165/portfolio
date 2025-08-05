json.extract! project, :id, :title, :description, :github_url, :live_url, :tech_stack, :created_at, :updated_at
json.url project_url(project, format: :json)
