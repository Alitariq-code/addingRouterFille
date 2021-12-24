const express = require('express');

const getAllUsers = (req, res) => {
  res.status(500).json({
    sucsses: 'not sucssesfull',
    maseg: 'this route is not defined yet',
  });
  console.log(req.body);
};
const delUser = (req, res) => {
  res.status(500).json({
    sucsses: 'not sucssesfull',
    maseg: 'this route is not defined yet',
  });
};
const getsingleUser = (req, res) => {
  res.status(500).json({
    sucsses: 'not sucssesfull',
    maseg: 'this route is not defined yet',
  });
};

const addUser = (req, res) => {
  res.status(500).json({
    sucsses: 'not sucssesfull',
    maseg: 'this route is not defined yet',
  });
};

const router = express.Router();
router.route('/').get(getAllUsers).post(addUser);
router.route('/:id').get(getsingleUser).delete(delUser);

module.exports = router;
