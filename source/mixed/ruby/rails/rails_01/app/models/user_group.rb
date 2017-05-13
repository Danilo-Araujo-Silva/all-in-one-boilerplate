class UserGroup < ApplicationRecord
  validates :grant, presence: { message: 'must be defined.'}, allow_blank: true

  belongs_to :user
  belongs_to :group

  @@grant_types = ['', '<', '<=', '=', '>', '>=', '<=>']

  def _sanitize
    super

    self.grant = nil if !(@@grant_types.include? self.grant)
  end

  def _validate
    super
  end
end
