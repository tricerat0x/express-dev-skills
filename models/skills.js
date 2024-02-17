const skills = [
    {
      id: 1,
      name: "JavaScript",
      description: "High-level, often just-in-time compiled language that conforms to the ECMAScript standard.",
      level: "Advanced"
    },
    {
      id: 2,
      name: "Python",
      description: "Interpreted, high-level, general-purpose programming language.",
      level: "Intermediate"
    },
    {
      id: 3,
      name: "HTML",
      description: "Standard markup language for documents designed to be displayed in a web browser.",
      level: "Advanced"
    },
    {
      id: 4,
      name: "CSS",
      description: "Style sheet language used for describing the presentation of a document written in a markup language like HTML.",
      level: "Advanced"
    },
    {
      id: 5,
      name: "Node.js",
      description: "Back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
      level: "Intermediate"
    },
    {
      id: 6,
      name: "React",
      description: "A JavaScript library for building user interfaces.",
      level: "Intermediate"
    },
  ];
  
  function getAll() {
    return skills;
  };

  function getOne(id) {

    id = parseInt(id);

    return skills.find(skill => skill.id === id);
  };


   function create(skill) {

    const highestId = Math.max(...skills.map(skill => skill.id));

    skill.id = highestId + 1

    skill.description = 'TBA'
    skill.level = "Beginner"
    skills.push(skill);
  };

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }

  module.exports = { getAll, getOne, create, deleteOne, };
  