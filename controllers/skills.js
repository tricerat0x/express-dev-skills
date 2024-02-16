const Skill = require('../models/skills');

function index(req, res) {
    res.render('skills', {
      skills: Skill.getAll()
    });
  };

  function show(req, res) {
    res.render('show', {
      skill: Skill.getOne(req.params.id),
    });
  }

module.exports = {
  index, show
};