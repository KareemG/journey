/**
 * GET /
 * Home page when logged in.
 */
exports.index = function(req, res) {
  if (req.user) {
    res.render('homeLogged', {
      title: 'Home2'
    });
  }
  else {
    return res.redirect('/');
  }
};
