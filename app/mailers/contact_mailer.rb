class ContactMailer < ActionMailer::Base
  default from: "no-reply@viewthought.com"

  def contact_us_message(message)
    @message = message

    mail to: "cmaxwell@ojala.com", subject: "Contact Us Form Submission"
  end
end
