class Group < ApplicationRecord
  has_many :children, :class_name => Group.name, :foreign_key => "parent_id"
  belongs_to :parent, :class_name => Group.name, :foreign_key => "parent_id", optional: true

  validates :title, presence: { message: 'cannot be empty.'}, allow_blank: false
  validates :description, presence: { message: 'cannot be empty.'}, allow_blank: false

  @@breadcrumb_by_ids_separator = '.'
  @@breadcrumb_by_titles_separator = ' > '

  @@main_groups = {
    root: Group.find_by_title('root'),
    developer: Group.find_by_title('developer'),
    administrator: Group.find_by_title('administrator'),
    user: Group.find_by_title('user'),
    public: Group.find_by_title('public')
  }.deep_freeze

  def self.main_groups
    @@main_groups
  end

  def main_groups
    @@main_groups
  end

  def _sanitize
    super

    self.parent_id = self.parent.id if !self.parent.nil?
  end

  def _validate
    super
  end

  def breadcrumb_by_ids
    return @breadcrumb_by_ids if defined? @breadcrumb_by_ids

    @breadcrumb_by_ids = self.id if self.parent_id.nil?

    @breadcrumb_by_ids = "#{self.parent.breadcrumb_by_ids}#{@@breadcrumb_by_ids_separator}#{self.id}" if !self.parent_id.nil?

    @breadcrumb_by_ids
  end

  def breadcrumb_by_titles
    return @breadcrumb_by_titles if defined? @breadcrumb_by_titles

    @breadcrumb_by_titles = self.title if self.parent_id.nil?

    @breadcrumb_by_titles = "#{self.parent.breadcrumb_by_titles}#{@@breadcrumb_by_titles_separator}#{self.title}" if !self.parent_id.nil?

    @breadcrumb_by_titles
  end
end
