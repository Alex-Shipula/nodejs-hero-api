const Heroes = require('../model/heroesSchema')
const { getInfo } = require('../helpers/getInfo')


exports.createHeroes = async (req, res) => {
  try {
    const createHeroes = await Heroes.create(req.body);
    res.status(201);
    res.json({
      status: 'success',
      createHeroes
    })
  } catch (error) { console.error(error) };
}
//saving the hero's profile to the base

exports.getHeroes = async (req, res) => {
  try {
    const getHeroes = await Heroes.find()
    res.status(200)
    res.json({
      status: 'success',
      getHeroes
    })
  } catch (error) { console.error(error) };
}
//getting all hero profiles

exports.updateHeroes = async (req, res) => {
  try {
    await Heroes.updateOne({
      _id: req.params.id
    }, {
      $set: {
        nickName: req.body.nickName
      }
    })
    res.status(200)
    res.json({
      status: 'success'
    })
  } catch (error) { console.error(error) };
}
//changing the nickname by id of the hero

exports.deleteHeroe = async (req, res) => {
  try {
    await Heroes.deleteOne({
      _id: req.params.id
    })
    res.status(200)
    res.json({
      status: 'success'
    })
  } catch (error) { console.error(error) };
}
//deleting a hero by id

exports.upload = async (req, res) => {
  try {
    const image = await Heroes.findOneAndUpdate({
      _id: req.params.id
    }, {
      image: req.file.path
    }, { 'returnNewDocument': true })
    res.status(201)
    res.json({
      status: 'success',
      image
    })
  } catch (error) { console.error(error) };
}
//loading profile photo by hero id

exports.getInfo = async (req, res) => {
  try {
    const info = await Heroes.find().then(res => res.map(getInfo))
    res.status(201)
    res.json({
      status: 'success',
      info
    })
  } catch (error) { console.error(error) };
}
//getting a list of nicknames and photos of heroes