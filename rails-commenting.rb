# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) A class controller that inherits from application controller 
class BlogPostsController < ApplicationController
  def index
    # ---2) a defined method that will perform the get request to display all blog posts.
    @posts = BlogPost.all
  end

  def show
    # ---3) a defined method that will perform a single request to find a specific blogpost.
    @post = BlogPost.find(params[:id])
  end

  # ---4) a defined method that will create a new blog post.
  def new
    @post = Post.new
  end

  def create
    # ---5) a defined method that will create a new blog post and save it ton the database
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) a method that rerenders the the user interface after submitting the data with the specific id
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The blogpost will get updated with the specific user details found from the find if its valid, otherwise it will redirect to a failure route. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) The line means something went wrong the deletion process, and its sending it to the error with deletion route
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) a method that can only be called from within the class where it is defined.
  private
  def blog_post_params
    # ---10) only allows a user to edit blog post title, and content.
    params.require(:blog_post).permit(:title, :content)
  end

end
