class AddColumnToProject < ActiveRecord::Migration[7.1]
  def change
    add_column :projects, :project_details, :string
  end
end
