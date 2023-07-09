const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
  // find all categories
  // be sure to include its associated Products
  const categoryData = await Category.findAll({ include: [{ model: Product }] });
  res.status(200).json(categoryData);
  } catch (err) {
    // handle server errors
    res.status(500).json({ message: 'Internal server error' });
  }
});

// get one category
router.get('/:id', async (req, res) => {
  try{
  // find one category by its `id` value
  // be sure to include its associated Products
  const categoryData = await Category.findByPk(req.params.id, { include: [{ model: Product }] });

  // if the category doesn't exist, send 404 status
  if (!categoryData) {
    res.status(404).json({ message: 'No category found with that id!' });
    return;
  }

  res.status(200).json(categoryData);
  } catch (err) {
    // handle server errors
    res.status(500).json({ message: 'Internal server error' });
  } 
});

// create new category
router.post('/', async (req, res) => {
  try{
  // create a new category
  const categoryData = await Category.create(req.body);
  res.status(200).json(categoryData);
  } catch (err) {
    // handle server errors
    res.status(500).json({ message: 'Internal server error' });
  }
});

// update category
router.put('/:id', async (req, res) => {
  try{
  // update a category by its `id` value
  const categoryData = await Category.update(req.body, { where: { id: req.params.id } });
  // if the category doesn't exist, send 404 status
  // otherwise, send 200 status and updated category
  !categoryData[0] ? res.status(404).json({ message: 'No category found with that id!' }) : res.status(200).json(categoryData);
  }
  catch (err) {
    // handle server errors
    res.status(500).json({ message: 'Internal server error' });
  }
});

// delete category
router.delete('/:id', async (req, res) => {
  try{
  // delete a category by its `id` value
  const deletedCategory = await Category.destroy({ where: { id: req.params.id } });
  // if the category doesn't exist, send 404 status
  // otherwise, send 200 status and deleted category
  !deletedCategory ? res.status(404).json({ message: 'No category found with that id!' }) : res.status(200).json(deletedCategory);
  // if there is a server error, send 500 status
  } catch (err) {
    // handle server errors
    res.status(500).json({ message: 'Internal server error' });
  }
});

// export router
module.exports = router;
