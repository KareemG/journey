/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  if (req.user) {
    res.render('homeLogged', {
      title: 'Home2'
    });
  }
  else {
    res.render('home', {
      title: 'Home'
    });
  }
};

