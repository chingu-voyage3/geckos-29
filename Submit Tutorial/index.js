var express = require('express'),
    app = express(),
    engines = require('consolidate'),
    bodyParser = require('body-parser'),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({ extended: true }));

// Handler for internal server errors
function errorHandler(err, req, res, next) {
    console.error(err.message);
    console.error(err.stack);
    res.status(500).render('error_template', { error: err });
}

MongoClient.connect('mongodb://localhost:27017/hackr', function(err, db) {

    assert.equal(null, err);
    console.log("Successfully connected to MongoDB.");

    app.get('/', function(req, res, next) {
        res.render('index', {});
    });

    app.post('/index', function(req, res, next) {
        var url = req.body.url;
        var framework = req.body.framework;
        var tag1 = req.body.tag1;
        var tag2 = req.body.tag2;
        var level = req.body.level;

        if ( (url == '') || (framework == '') ) {
            next('Please provide an entry for first two fields.');
        } else {
            db.collection('courses').insertOne(
                { 'URL': url, 'Programming language': framework , 'Availability': tag1, 'Resource type': tag2 },
                function (err, r) {
                    assert.equal(null, err);
                    res.send("Document inserted with _id: " + r.insertedId);
                }
            );
        }
    });

    app.use(errorHandler);

    var server = app.listen(3000, function() {
        var port = server.address().port;
        console.log('Express server listening on port %s.', port);
    });

});
