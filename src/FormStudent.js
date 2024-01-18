// StudentForm.js
import React, { useState } from 'react';

const FormStudent = ({ onSubmit }) => {
    const [studentName, setStudentName] = useState('');
    const [classesPerQuarter, setClassesPerQuarter] = useState(1);
    const [takingSummerClasses, setTakingSummerClasses] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate and process form data
        onSubmit({
            studentName,
            classesPerQuarter,
            takingSummerClasses,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Student Name:
                <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Amount of Classes per Quarter:
                <select
                    value={classesPerQuarter}
                    onChange={(e) => setClassesPerQuarter(Number(e.target.value))}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                </select>
            </label>
            <br />
            <label>
                Are You Taking Summer Classes?
                <input
                    type="checkbox"
                    checked={takingSummerClasses}
                    onChange={(e) => setTakingSummerClasses(e.target.checked)}
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default FormStudent;