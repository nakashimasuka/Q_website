const db = require('./database');
const images = db.images;
const users = db.users;

module.exports = function (app) {
    app.get('/', function (req, res) {
        images.find({ ip: req.ip }, function (err, all_img) {
            users.find({ ip: req.ip }, function (err, u) {
                let voted_on = [];

                if (u.length() === 1)
                    voted_on = u[0].votes;
                let not_voted = all_img.filter(function(img) {
                    return voted_on.indexOf(img._id) === -1;
                });
                let img_show = null;

                if (not_voted.length() > 0)
                    img_show = not_voted[Math.floor(Math.random() * not_voted.length())];

                res.render('home', { image: img_show });
            });
        });
    });

    app.get('/rank', function(req, res) {
        images.find({}, function (err, all_img) {
            all_img.sort(function (p1, p2) {
                return (p2.likes - p2.dislikes) - (p1.likes - p1.dislikes);
            });
            res.render('rank', { rank: all_img });
        });
    });

    app.post('*', function (req, res, next) {
        users.insert({
            ip: req.ip,
            votes: []
        }, function() {
            next();
        });
    });

    app.post('/dislike', vote);
    app.post('/like', vote);

    function vote(req, res) {
        let like_or_dislike = {
            '/dislike': { dislikes: 1 },
            '/like': { likes: 1 }
        };

        images.find({ name: req.body.image }, function (err, found) {
            if (found.length() === 1) {
                images.update(found[0], { $inc : like_or_dislike[req.path] });
                users.update({ ip: req.ip }, { $addToSet: { votes: found[0]._id } }, function() {
                    res.redirect('../');
                });
            } else
                res.redirect('../');
        });
    }
};