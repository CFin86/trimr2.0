var helper = require('sendgrid').mail;
var sg = require('sendgrid')('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');

exports.sendEmail = function(to, from, subject, content) {
    
    var fromEmail = new helper.Email (from);
    var toEmail = new helper.Email (to);
    var content = new helper.Content ('text/html', content);
    var mail = new helper.Mail (fromEmail, subject, toEmail, content);
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send', 
        body: mail.toJSON()
    });
    return sg.API(request);
}