// components/Testimonials.jsx
import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'testimonials'), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTestimonials(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl text-blue-950 font-bold mb-6 text-center">🌟 What Clients Say About My Work </h2>

      {testimonials.length === 0 ? (
        <p className="text-center text-gray-500">No testimonials yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white shadow p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                <span className="text-yellow-500 text-sm">{'⭐'.repeat(t.rating)}</span>
              </div>
              <p className="text-gray-700">{t.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Testimonials;
