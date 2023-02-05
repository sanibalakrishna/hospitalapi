const { default: mongoose } = require("mongoose");
const Booking = require("../models/bookingModel")

// get all doctors
const getAllBooking = async(req,res)=>{ 
    const booking= await Booking.find();
    res.status(200).json(booking);
}

// get a specific doctor
const getBooking = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
       return res.status(404).json({message:"no such booking found"});
    }
    const booking = await Booking.findById(id);
    if(!booking)
    {
       return res.status(404).json({message:"no such booking found"});
    }
    res.status(200).json(booking);
}


// create a doctor
const createBooking =async (req,res)=>{
    const {time,date,userid,doctorid} = req.body;
    const emptyfiels= []
    if(!time)
    {
        emptyfiels.push("time");
    }
    if(!date)
    {
        emptyfiels.push("date");
    }
    if(!userid)
    {
        emptyfiels.push("userid");
    }
    if(!doctorid)
    {
        emptyfiels.push("doctorid");
    }
  
    
    if(emptyfiels.length>0)
    {
        return res.status(400).json({message:"Please fill all the fields",fields:emptyfiels})
    }

    try {
        const booking = new Booking({time,date,userid,doctorid});
        booking.save();
        res.status(200).json(booking)
        
    } catch (error) {
        res.status(404).json({message:error.message});
        
    }


}


// update a doctor
const updateBooking = async(req,res)=>{
 const {id} = req.params;
 if(!mongoose.Types.ObjectId.isValid(id))
 {
    return res.status(404).json({message:"no such doctor found"});
 }
 const booking = await Booking.findOneAndUpdate({_id:id},req.body);
 if(!booking)
 {
    return res.status(404).json({message:"no such doctor found"});
 }
 res.status(200).json(booking);
}

// delete a doctor
const deleteBooking = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
       return res.status(404).json({message:"no such doctor found"});
    }
    const booking = await Booking.findOneAndDelete({_id:id});
    if(!booking)
    {
       return res.status(404).json({message:"no such doctor found"});
    }
    res.status(200).json(booking);
}

module.exports={getBooking,createBooking,getAllBooking,updateBooking,deleteBooking}