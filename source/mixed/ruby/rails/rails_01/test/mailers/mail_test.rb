require 'test_helper'

class MailTest < ActionMailer::TestCase
  test "send email" do
    mail = Mail.new do
      from     'skeleton@example.com'
      to       'skeleton@example.com'
      subject  'Here is the image you wanted'
      body     'body'
    end

    mail.deliver!

    # Test the body of the sent email contains what we expect it to
    assert_equal ['skeleton@example.com'], mail.from
    assert_equal ['skeleton@example.com'], mail.to
    assert_equal 'Here is the image you wanted', mail.subject
    assert_equal 'body', mail.body.to_s
  end
end

