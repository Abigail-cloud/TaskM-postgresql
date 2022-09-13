const notFound = (req, res) => res.status(404).send(' Non-existent Route!!');

module.exports = notFound;