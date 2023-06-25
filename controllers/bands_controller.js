// DEPENDENCIES
const bands = require('express').Router();
const db = require('../models');
const { Band } = db;
const { Op } = require('sequelize');

// FIND ALL BANDS
bands.get('/', async (req, res) => {
    try {
        const { name = '', limit = 3, offset = 0 } = req.query;
        const searchTerm = req.query.name ? req.query.name : '';
        const foundBands = await Band.findAll({
            order: [
                ['available_start_time', 'ASC'],
                ['name', 'ASC']
            ],
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            offset,
            limit
        });
        res.status(200).json(foundBands);
    } catch (error) {
        res.status(500).json(error)
    }
});

// FIND A SPECIFIC BAND
bands.get('/:id', async (req,res) => {
    const {id} = req.params
    try {
    const foundBand = await Band.findOne({
        where: {band_id: id}
    })
    if (!foundBand) {
        res.status(404).json({message: 'Could not find Band'})
    } else {
        res.status(200).json(foundBand)
    }
    } catch (error) {
    res.status(500).json(error)
    }
});

// CREATE A BAND
bands.post('/', async (req, res) => {
    try {
        const newBand = await Band.create(req.body);
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newBand
        })
    } catch(err) {
        res.status(500).json(err)
    }
});

// UPDATE A BAND
bands.put('/:id', async (req, res) => {
    try {
        const updatedBands = await Band.update(req.body, {
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedBand} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
});

// DELETE A BAND
bands.delete('/:id', async (req, res) => {
    try {
        const deletedBands = await Band.destroy({
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedBand} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
});

// EXPORT
module.exports = bands;
