const express = require('express');
const router = express.Router();
const { data } = require ('../data/data.json');
const { projects } = data;

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id <= projects.length) {
    const title = projects[id].project_name;
    const description = projects[id].description;
    const technologies = projects[id].technologies;
    const liveLink = projects[id].live_link;
    const gitHubLink = projects[id].github_link;
    const image = projects[id].image_urls;
    const templateData = { title, description, technologies,liveLink,  gitHubLink, image};
    res.render('project', templateData);
  } else {
    res.redirect('/error');
  }
});

module.exports = router;
