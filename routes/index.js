var express  = require('express'),
    router   = express.Router(),
    app      = express(),
    nodemailer = require('nodemailer'),
    request  = require('request');


router.get('/', function(req, res){
    res.render('index');
});

router.get('/components', function(req, res){
    res.render('components');
});

router.post('/', function(req, res){
    var newQuoteRequest = {
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phone: req.body.phone,
        company: req.body.company,
        type: req.body.type,
        description: req.body.description,
        bodget: req.body.budget
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
        to: 'hello@absideoninteractive.com',
        subject: 'Quote Request from Absideon Interactive',
        html: '<b>Name:</b> ' + req.body.fname + " " + req.body.lname + "<div><b>Email:</b> " + req.body.email + "</div><div><b>Phone:</b> " + req.body.phone + "</div><div><b>Company:</b> " + req.body.company + "</div><div><b>Project Type:</b> " + req.body.type + "</div><div><b>Budget:</b> " + req.body.budget + "</div><div><b>Project Description:</b> " + req.body.description + "</div>"
    }

    smtpTrans.sendMail(mailOpts, (error, response) => {
        if (error) {}
        else {}
    })

    res.redirect('/');
});

module.exports = router;
