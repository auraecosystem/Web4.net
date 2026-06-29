❯ Give me a temp email — I need to sign up for a free trial

◐ I'll create a temporary address with DropMail.

● create_session
  └ {"address":"tmpbox47@dropmail.me","restore_key":"a1b2c3…"}

  Your temporary address: tmpbox47@dropmail.me
  Save the restore key (a1b2c3…) if you want to recover it later.

❯ Done, I submitted the form — please wait for the confirmation email

● wait_for_email
  └ {"arrived":true,"headerSubject":"Verify your email address","fromAddr":"noreply@example.com",…}

  📬 Email arrived!
  From:    Example Service <noreply@example.com>
  Subject: Verify your email address
  Preview: Please verify your email address to complete your registration. Use the…

❯ What's the code?

● read_email
  └ {"text":"…Your verification code is 482-951. It expires in 10 minutes…","textSource":"HTML",…}

  Your verification code is: 482-951
