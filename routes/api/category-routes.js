const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [
      Product
    ]
  }).then((response) => {
    res.status(200).json(response);
  });
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [
      Product
    ]
  });
});

router.post('/', (req, res) => {
  Category.create(req.body).then((response) => {
    res.status(200).json(response);
  });
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then((response) => {
    res.status(200).json(response);
  });
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((response) => {
    res.status(200).json(response);
  });
});

module.exports = router;
