
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
  name:  {
    type:String,
    required:[true,"Hospital should hava a name"]
  },
  address: {
      type:String,
      required:[true,"Hospital should hava a address"]
  },
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
  
  
});

hospitalSchema.index({ location: "2dsphere" });
module.exports = mongoose.model('Hospital',hospitalSchema);