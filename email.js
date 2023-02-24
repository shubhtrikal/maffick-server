const Sib = require('sib-api-v3-sdk');

function mailsent(email, content) {
    const apiKey = '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';

    const client = Sib.ApiClient.instance;

    const api_key = client.authentications['api-key'];
    api_key.apiKey = apiKey;

    const transEmail = new Sib.TransactionalEmailsApi();

    const sender = {
        email: 'maffick23manit@gmail.com'
    }
    const rec = [
        {
            email: email,
        }
    ]

    transEmail.sendTransacEmail({
        sender,
        to: rec,
        subject: 'Maffick 2023: Registration',
        htmlContent: content,


    }).then((d) => {
        console.log(d);
    }).catch((e) => {
        console.log(e);
    });
}

module.exports = mailsent;