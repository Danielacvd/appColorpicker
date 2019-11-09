require 'test_helper'

class IndexControllerTest < ActionDispatch::IntegrationTest
  test "should get vista" do
    get index_vista_url
    assert_response :success
  end

end
