// App.js
import React, { useState } from 'react';
import FormStudent from "./FormStudent.js";
import StudentSchedule from "./StudentSchedule";

const App = () => {
    const [formData, setFormData] = useState(null);
    const [confirmationVisible, setConfirmationVisible] = useState(false);
    const [isConfirmedGlobal, setIsConfirmedGlobal] = useState(false);

    const handleConfirmation = () => {
        setConfirmationVisible(false);
    };

    const handleFormSubmit = (formData) => {
        const isConfirmed = window.confirm('Do you want to submit the form?');

        if (isConfirmed) {
            // Trigger the onConfirmation callback to show the confirmation message
            handleConfirmation();
            // Set the form data in the state
            setFormData(formData);
            setIsConfirmedGlobal(true);
        }
        console.log("Form submitted")
    };

    return (
        <div>
            <div>
                {isConfirmedGlobal ? (
                    <StudentSchedule formData={formData} />
                ) : (
                    <FormStudent onSubmit={handleFormSubmit} />
                )}
            </div>
        </div>
    );
};

export default App;
