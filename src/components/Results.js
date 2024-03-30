import React, { useRef, useEffect } from 'react';
import std1 from '../../src/images/student1.jpeg';
import std2 from '../../src/images/student1.jpeg';
import std3 from '../../src/images/student1.jpeg';

const Results = () => {
  const students = [
    { name: 'John Doe', batch: 'Batch A', marks: 85, photo: std1 },
    { name: 'Jane Smith', batch: 'Batch B', marks: 92, photo: std2 },
    { name: 'Mike Johnson', batch: 'Batch C', marks: 78, photo: std3 },
    { name: 'John Doe', batch: 'Batch A', marks: 85, photo: std1 },
    { name: 'Jane Smith', batch: 'Batch B', marks: 92, photo: std2 },
    { name: 'Mike Johnson', batch: 'Batch C', marks: 78, photo: std3 }
  ];
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        if (scrollContainerRef.current.scrollLeft + scrollContainerRef.current.offsetWidth >= scrollContainerRef.current.scrollWidth) {
          scrollContainerRef.current.scrollLeft = 0;
        } else {
          scrollContainerRef.current.scrollLeft += 530; // Adjust the scroll amount as needed
        }
      }
    }, 2000); // 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#171B41' }}>
      <div className="text-white" style={{ fontWeight: '600', fontSize: '36px' }}>
        Results
      </div>
      <div className="text-white">
        Let's join our famous class, the knowledge provided will definitely be useful for you.
      </div>
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto whitespace-nowrap mb-4 scrollbar-thin scrollbar-thumb-gray-400"
        style={{ maxHeight: '70vh', overflow: 'hidden', whiteSpace: 'nowrap' }} // Set overflow to hidden
      >
        {/* Render students */}
        {students.map((student, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg" style={{ display: 'inline-block',marginTop:'40px', marginRight: '40px', backgroundColor: 'white' }}>
            <img className="w-full" src={student.photo} alt="Student" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{student.name}</div>
              <p className="text-gray-700 text-base">
                Batch: {student.batch}<br />
                Marks: {student.marks}
              </p>
            </div>
          </div>
        ))}
        {/* Duplicate the students to create a loop */}
        {students.map((student, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg" style={{ display: 'inline-block', marginTop:'40px',marginRight: '40px', backgroundColor: 'white' }}>
            <img className="w-full" src={student.photo} alt="Student" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{student.name}</div>
              <p className="text-gray-700 text-base">
                Batch: {student.batch}<br />
                Marks: {student.marks}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
