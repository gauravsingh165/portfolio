class ResumesController < ApplicationController
  before_action :set_resume, only: [:show, :edit, :update, :destroy]
#   before_action :authenticate_admin!, except: [:show, :index]

  # GET /resumes or /resumes.json
  def index
    @resumes = Resume.all
  end

  # GET /resume (latest)
  def show
    unless @resume
      redirect_to new_resume_path, alert: "No resume uploaded yet." and return
    end
  end

  # GET /resumes/new
  def new
    @resume = Resume.new
  end

  # POST /resumes
  def create
    @resume = Resume.new(resume_params)

    if @resume.save
      redirect_to @resume, notice: 'Resume was successfully uploaded.'
    else
      render :new, status: :unprocessable_entity
    end
  end

  # GET /resumes/:id/edit
  def edit
  end

  # PATCH/PUT /resumes/:id
  def update
    if @resume.update(resume_params)
      redirect_to @resume, notice: 'Resume was successfully updated.'
    else
      render :edit, status: :unprocessable_entity
    end
  end

  # DELETE /resumes/:id
  def destroy
    @resume.destroy
    redirect_to resumes_url, notice: 'Resume was successfully deleted.'
  end

  private

  def set_resume
    @resume = Resume.last
  end

  def resume_params
    params.require(:resume).permit(:file)
  end

  def authenticate_admin!
    # Replace with your admin logic (e.g., Devise current_user&.admin?)
    redirect_to root_path, alert: "Access denied." unless current_user&.admin?
  end
end
