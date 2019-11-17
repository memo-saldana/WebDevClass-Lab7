const mongoose = require('mongoose'),
      Person = require('../models/person'),
      MyError = require('../middleware/MyError'),
      ctr = {};

ctr.create = () => async (req,res,next) => {
  let {data} = req.body;
  const persons = await Person.insertMany(data)

  return res.status(200).json({data: persons});
}
ctr.findAll = () => async (req,res,next) => {
  const persons = await Person.find({}).exec();
  return res.status(200).json({data: persons});
}
ctr.findOne = () => async (req,res,next) => {
  let {id} = req.params;
  const person = await Person.findById(id).exec();
  if(!person) return Promise.reject(new MyError(404, "Person not found."));
  return res.status(200).json({data:person});
}
ctr.update = () => async (req,res,next) => {
  let {id} = req.params;
  let {data} = req.body;
  const person = await Person.findByIdAndUpdate(id, data, {new: true}).exec();
  if(!person) return Promise.reject(new MyError(404, "Person not found."));
  return res.status(200).json({data:person});
}
ctr.remove = () => async (req,res,next) => {
  let {id} = req.params;
  const person = await Person.findByIdAndDelete(id).exec();
  if(!person) return Promise.reject(new MyError(404, "Person not found."));
  return res.status(200).json({data:person});
}





module.exports = ctr;