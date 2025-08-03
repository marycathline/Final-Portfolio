import React, { useState } from 'react';
import { db } from './firebase'; // 👈 make sure this path is correct
import { collection, addDoc, Timestamp } from 'firebase/firestore';

const TestimonialForm = () => {
  const [testimonial, setTestimonial] = useState({ name: '', text: '', rating: 5 });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, 'testimonials'), {
        ...testimonial,
        createdAt: Timestamp.now()
      });
      setSubmitted(true);
      setTestimonial({ name: '', text: '', rating: 5 });
    } catch (err) {
      console.error('❌ Error submitting testimonial:', err);
      alert('Something went wrong. Please try again.');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto mt-8">
      <h3 className="text-2xl font-semibold mb-4">Share your experience</h3>

      {submitted && (
        <div className="mb-4 text-green-600 font-medium">
          ✅ Thank you! Your testimonial has been submitted.
        </div>
      )}

      <input
        type="text"
        placeholder="Your Name"
        className="border p-2 w-full mb-4 rounded"
        value={testimonial.name}
        onChange={(e) => setTestimonial({ ...testimonial, name: e.target.value })}
        required
      />

      <textarea
        placeholder="What would you like to say?"
        className="border p-2 w-full mb-4 rounded"
        rows="4"
        value={testimonial.text}
        onChange={(e) => setTestimonial({ ...testimonial, text: e.target.value })}
        required
      />

      <label className="block mb-2 font-medium">Rating:</label>
      <select
        value={testimonial.rating}
        className="border p-2 mb-4 rounded"
        onChange={(e) => setTestimonial({ ...testimonial, rating: parseInt(e.target.value) })}
      >
        {[5, 4, 3, 2, 1].map((n) => (
          <option key={n} value={n}>{n} Star{n > 1 && 's'}</option>
        ))}
      </select>

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default TestimonialForm;
