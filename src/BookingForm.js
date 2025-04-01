import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function BookingForm({ today, availableTimes = [], dispatch }) {
    const navigate = useNavigate();

    useEffect(() => {
        dispatch({ type: 'SELECT_DATE', date: today }); // Fetch available times for today's date on initial render
    }, [dispatch, today]);

    const formik = useFormik({
        initialValues: {
            date: today,
            time: '',
            guests: '1',
            occasion: '',
        },
        validationSchema: Yup.object({
            date: Yup.date()
                .required('Date is required'),
            time: Yup.string()
                .required('Please select a time for your reservation'),
            guests: Yup.number()
                .min(2, 'Please select at least 2 guests'),
            occasion: Yup.string()
                .required('Please let us know if this is a special occasion'),
        }),
        onSubmit: (values) => {
            console.log(`Date: ${values.date}, Time: ${values.time}, Guests: ${values.guests}, Occasion: ${values.occasion}`);
            navigate('/booking-confirmed'); // Navigate to the booking confirmation page
        },
    });

    useEffect(() => {
        if (formik.values.date) {
            dispatch({ type: 'SELECT_DATE', date: formik.values.date });
        }
    }, [formik.values.date, dispatch]);

    return (
        <form className="booking-form" role="form" onSubmit={formik.handleSubmit}>
            <fieldset>
                <label htmlFor="res-date" className="lead">Choose date</label>
                <input
                    type="date"
                    id="res-date"
                    aria-label="Choose date"
                    required
                    min={today}
                    className={formik.touched.date && formik.errors.date ? 'error-border' : ''}
                    {...formik.getFieldProps('date')}
                />
                {formik.touched.date && formik.errors.date ? (
                    <div className="error">{formik.errors.date}</div>
                ) : null}
            </fieldset>
            <fieldset>
                <label htmlFor="res-time" className="lead">Choose time</label>
                <select
                    id="res-time"
                    aria-label="Choose time"
                    required
                    className={formik.touched.time && formik.errors.time ? 'error-border' : ''}
                    {...formik.getFieldProps('time')}
                >
                    <option value="" disabled>Select a time</option>
                    {availableTimes.map((availableTime) => (
                        <option key={availableTime} value={availableTime}>
                            {availableTime}
                        </option>
                    ))}
                </select>
                {formik.touched.time && formik.errors.time ? (
                    <div className="error">{formik.errors.time}</div>
                ) : null}
            </fieldset>
            <fieldset>
                <label htmlFor="guests" className="lead">Number of guests</label>
                <input
                    type="number"
                    placeholder="1"
                    min="1" max="10"
                    id="guests"
                    aria-label="Number of guests"
                    required
                    className={formik.touched.guests && formik.errors.guests ? 'error-border' : ''}
                    {...formik.getFieldProps('guests')}
                />
                {formik.touched.guests && formik.errors.guests ? (
                    <div className="error">{formik.errors.guests}</div>
                ) : null}
            </fieldset>
            <fieldset>
                <label htmlFor="occasion" className="lead">Occasion</label>
                <select
                    id="occasion"
                    aria-label="Occasion"
                    required
                    className={formik.touched.occasion && formik.errors.occasion ? 'error-border' : ''}
                    {...formik.getFieldProps('occasion')}
                >
                    <option value="">Please Select</option>
                    <option value="none">None</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>
                {formik.touched.occasion && formik.errors.occasion ? (
                    <div className="error">{formik.errors.occasion}</div>
                ) : null}
            </fieldset>
            <button
                className="button"
                type="submit"
                aria-label="On Click"
                disabled={!formik.isValid || formik.isSubmitting} // Disable button if form is invalid or submitting
            >
                Make Your reservation
            </button>
        </form>
    );
}

export default BookingForm;