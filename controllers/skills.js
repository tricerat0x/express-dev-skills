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
  };

  function newSkill(req, res) {
    res.render('new', { title: 'New Skill' });
  };

  	
function create(req, res) {
    Skill.create(req.body);
    res.redirect('/');
  };


  function delSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/');
  }

module.exports = {
  index, show, new: newSkill, create, delSkill, 
};