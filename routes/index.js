var express  = require('express'),
    router   = express.Router(),
    app      = express(),
    nodemailer = require('nodemailer'),
    request  = require('request');


router.get('/', function(req, res){
    res.render('index');
});

router.post('/', function(req, res){
    var newQuoteRequest = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email
    }

    const smtpTrans = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'absideoninteractive@gmail.com',
            pass: 'ltadsmzscafllzpf'
        }
    })

    const mailOpts = {
        to: 'absideoninteractive@gmail.com',
        subject: 'Quote Request from Absideon Interactive',
        html: '<b>Name:</b> ' + req.body.fname + " " + req.body.lname + "<div><b>Email:</b> " + req.body.email
    }

    smtpTrans.sendMail(mailOpts, (error, response) => {
        if (error) {}
        else {}
    })

    res.redirect('/');
});

module.exports = router;
