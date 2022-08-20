import express from 'express';
import TruckData from '../models/trucksData.js';

const router = express.Router();

export const getTrucks = async (req, res) => {
    try {
        const truckData = await TruckData.find();

        res.status(200).json(truckData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTruck = async (req, res) => {
    const truck = req.body;

    const newTruck = new TruckData(truck);

    try {
        await newTruck.save();

        res.status(201).json(newTruck);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}




export default router;