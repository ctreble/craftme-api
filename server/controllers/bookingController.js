const db = require('../../db/schema.js');

module.exports = {
  requestBooking: async (req, res) => {
    try {
      //get teacher_id & student_id is obtained from req.body
      let id = req.body.id;
      //insert into bookings table
      let booking = Booking.create({});
      //timeslot will also be from req.body
      //confirmed = 0 initially
    } catch (error) {
      console.log(error);
      return;
    }
  },
  // respondBooking: (req, res) => {
  //   //get teacher_id & student_id & timeslot from req.body
  //   //query bookings table where timeslot, teacher_id & student id are the same
  //   //change confirmed status to 1
  // },
  // denyBooking: (req, res) => {
  //   //get teacher_id & student_id & timeslot from req.body
  //   //query bookings table with above info
  //   //findanddelete the entry from the table
  // },
  submitAvailability: (req, res) => {
    //get all information from req.body
    //confirmed = 0
    //insert booking into bookings table
  }
};
