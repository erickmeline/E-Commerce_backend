const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      Product
    ]
  }).then((response) => {
    res.status(200).json(response);
  });
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      Product
    ]
  });
});

router.post('/', (req, res) => {
  Tag.create(req.body).then((response) => {
    res.status(200).json(response);
  });
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then((response) => {
    res.status(200).json(response);
  });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  }).then((response) => {
    res.status(200).json(response);
  });
});

module.exports = router;
