// src/components/EventFormModal.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Dropzone from 'react-dropzone';

const EventSchema = Yup.object().shape({
    title: Yup.string().required('Event title is required'),
    description: Yup.string().max(300, 'Description cannot exceed 300 characters'),
});

const EventFormModal = ({ selectedDate, onClose, onSubmit }) => {
    const handleFileUpload = (files, setFieldValue) => {
        const file = files[0];
        setFieldValue('file', file);
    };

    return (
        <div className="modal">
            <Formik
                initialValues={{ title: '', description: '', date: selectedDate, file: null }}
                validationSchema={EventSchema}
                onSubmit={async (values) => {
                    const formData = new FormData();
                    formData.append('title', values.title);
                    formData.append('description', values.description);
                    formData.append('date', values.date);
                    if (values.file) {
                        formData.append('file', values.file);
                    }

                    const response = await axios.post('http://localhost:3000/events', formData, {
                        headers: { 'Content-Type': 'multipart/form-data' },
                    });
                    onSubmit(response.data);
                }}
            >
                {({ setFieldValue, isSubmitting }) => (
                    <Form>
                        <h2>Create Event</h2>
                        <label>Title</label>
                        <Field name="title" placeholder="Event Title" />
                        <ErrorMessage name="title" component="div" />

                        <label>Description</label>
                        <Field name="description" as="textarea" placeholder="Event Description" />
                        <ErrorMessage name="description" component="div" />

                        <label>Attach File</label>
                        <Dropzone onDrop={(acceptedFiles) => handleFileUpload(acceptedFiles, setFieldValue)}>
                            {({ getRootProps, getInputProps }) => (
                                <div {...getRootProps({ className: 'dropzone' })}>
                                    <input {...getInputProps()} />
                                    <p>Drag 'n' drop a file here, or click to select one</p>
                                </div>
                            )}
                        </Dropzone>

                        <button type="submit" disabled={isSubmitting}>
                            Save Event
                        </button>
                        <button type="button" onClick={onClose}>
                            Cancel
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default EventFormModal;
