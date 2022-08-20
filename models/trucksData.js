import mongoose from "mongoose";

const truckSchema = mongoose.Schema({
    capacity: Number,
    gas: Number,
    distance: Number,
    depreciation: Number,
});

const TruckData = mongoose.model('TruckData', truckSchema);

export default TruckData;