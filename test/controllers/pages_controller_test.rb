require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get rgb" do
    get pages_rgb_url
    assert_response :success
  end

end
