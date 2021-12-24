const express = require('express');
const fs = require('fs');
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

const getAlltour = (req, res) => {
  res.status(200).json({
    status: 'sucsses',
    results: tours.length,
    requestedby: req.usermame,
    adress: req.useraddress,
    data: {
      tours,
    },
  });
};
const getsingleTour = (req, res) => {
  console.log(req.params.id);
  const index = req.params.id;
  const newData = tours[index];
  if (newData) {
    res.status(200).json({
      status: 'sucsses',
      data: {
        tour: newData,
      },
    });
  } else {
    console.log('data nahi mull raa');
    res.status(404).send('daata ahi hai bhai');
  }
};

const delTour = (req, res) => {
  res.status(204).json({
    sucsses: 'sucsses',
    data: 'ad',
  });
};

const addTour = (req, res) => {
  const id = tours[tours.length - 1].id + 1;
  const newtour = Object.assign({ id: id }, req.body);
  tours.push(newtour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        sucsses: 'sucesss',
        data: {
          tour: newtour,
        },
      });
      console.log(req.body);
    }
  );
};

const router = express.Router();
router.route('/').get(getAlltour).post(addTour);
router.route('/:id').get(getsingleTour).delete(delTour);

module.exports = router;
