const { Item } = require('../models');

exports.dashboard = async (req, res) => {
  const items = await Item.findAll({ where: { is_active: true } });
  res.render('dashboard', { items, user: req.user });
};

exports.formAdd = (req, res) => res.render('addItem');

exports.createItem = async (req, res) => {
  await Item.create({
    ...req.body,
    created_by: req.user.username
  });
  res.redirect('/dashboard');
};

exports.formEdit = async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  res.render('editItem', { item });
};

exports.updateItem = async (req, res) => {
  await Item.update(
    { ...req.body, updated_by: req.user.username },
    { where: { id: req.params.id } }
  );
  res.redirect('/dashboard');
};

exports.deleteItem = async (req, res) => {
  await Item.update(
    { is_active: false, updated_by: req.user.username },
    { where: { id: req.params.id } }
  );
  res.redirect('/dashboard');
};
