const createComponent = require("../src/createComponent");
const componentNotFound = require("../src/component-not-found");

module.exports = async (req, res) => {
  const {
    component,
    skill,
    value,
    design,
    fill,
    duration,
    role,
    company,
    logo,
    text,
  } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  // const params = ;
  if (component && req.query) {
    let createcompo = await createComponent(component, {
      skill,
      value,
      design,
      fill,
      duration,
      role,
      company,
      logo,
      text,
    });
    res.send(createcompo);
  } else {
    res.send(componentNotFound());
  }
};
