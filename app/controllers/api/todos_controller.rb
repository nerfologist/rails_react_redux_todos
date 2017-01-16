class Api::TodosController < ApplicationController
  def show
    render json: Todo.find(params[:id])
  end

  def index
    render json: Todo.all
  end

  def create
    if todo = Todo.create(todo_params)
      render json: todo, status: :created
    else
      render json: todo.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    todo = Todo.find(params[:id])
    if todo.update(todo_params)
      render json: todo
    else
      render json: todo.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    todo = Todo.find(params[:id])
    if todo.destroy
      render json: todo
    else
      render json: ['cannot delete Todo'], status: :unprocessable_entity
    end
  end

  protected

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
