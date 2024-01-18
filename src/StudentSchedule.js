// StudentSchedule.js
import React from 'react';

const StudentSchedule = ({ formData }) => {
    return (
        <div>
            <h2>Student Schedule</h2>
            <p>Student Name: {formData.studentName}</p>
            <p>Classes Per Quarter: {formData.classesPerQuarter}</p>
            <p>Taking Summer Classes: {formData.takingSummerClasses ? 'Yes' : 'No'}</p>
            {/* Add additional content for the student schedule page */}
        </div>
    );
};

export default StudentSchedule;