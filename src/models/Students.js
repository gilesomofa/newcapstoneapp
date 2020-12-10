const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    studentId: {
        type: Number,
        required: true,
        unique: true
    },
    
    classroomId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now  
    }
});

module.exports = Student = mongoose.model('student', StudentSchema);


