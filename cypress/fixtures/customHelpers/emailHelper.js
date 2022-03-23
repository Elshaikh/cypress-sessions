/**
 * This function fetch email using gmail-tester library &
 * assert that email contains relevant string
 */
export function pullMail(fromEmail, to, subject) {
    cy.task("gmail:check_inbox", {
        options: {
            from: fromEmail,
            to: to,
            subject: subject,
            include_body: true,
            wait_time_sec: 2, // Poll interval (in seconds).
            max_wait_time_sec: 60,
        },
    }).then((emails) => {
        assert.isAtLeast(
            emails.length,
            1,
            "Expected to find at least one email, but none were found!"
        );

        const emailBody = emails[0].body.html; // newest email
        console.log(emailBody)
        assert.isTrue(
            emailBody.indexOf(
                "Please verify your account"
            ) >= 0,
            "I Found! Please verify your account"
        )
        assert.isTrue(
            emailBody.indexOf(
                "Confirm email"
            ) >= 0,
            "I Found Confirm email"
        );

    });
}
