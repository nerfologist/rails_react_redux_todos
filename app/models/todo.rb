class Todo < ApplicationRecord
  validate :title, presence: true
  validate :body, presence: true
  validate :done, inclusion: { in: [true, false] }
end
