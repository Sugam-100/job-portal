import React, { useEffect, useState, useRef } from 'react'
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // ✅ Required for Quill styling
import { JobCategories, JobLocations } from '../assets/assets';

const AddJob = () => {

    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('Bangalore');
    const [category, setCategory] = useState('Programming');
    const [level, setLevel] = useState('Beginner level');
    const [salary, setSalary] = useState(0);

    const editorRef = useRef(null);
    const quillRef = useRef(null);

    useEffect(() => {
        // ✅ Initialize Quill only once
        if (!quillRef.current && editorRef.current) {
            quillRef.current = new Quill(editorRef.current, {
                theme: 'snow',
            });
        }
    }, []);

    return (
        // ✅ ⛔ Sidebar container removed here
        <form className='p-6 flex flex-col items-start gap-4 w-full max-w-5xl mx-auto'>
            <div className='w-full'>
                <p className='mb-2 font-medium'>Job Title</p>
                <input
                    type="text"
                    placeholder='Type here'
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    required
                    className='w-full max-w-lg px-3 py-2 border-2 border-gray-300 rounded'
                />
            </div>

            <div className='w-full max-w-lg'>
                <p className='my-2 font-medium'>Job Description</p>
                <div
                    ref={editorRef}
                    className="min-h-[150px] border-2 border-gray-300 rounded p-2"
                ></div>
            </div>

            <div className='flex flex-col sm:flex-row gap-4 w-full'>
                <div>
                    <p className='mb-2 font-medium'>Job Category</p>
                    <select
                        className='w-full px-3 py-2 border-2 border-gray-300 rounded'
                        onChange={e => setCategory(e.target.value)}
                    >
                        {JobCategories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <p className='mb-2 font-medium'>Job Location</p>
                    <select
                        className='w-full px-3 py-2 border-2 border-gray-300 rounded'
                        onChange={e => setLocation(e.target.value)}
                    >
                        {JobLocations.map((location, index) => (
                            <option key={index} value={location}>{location}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <p className='mb-2 font-medium'>Job Level</p>
                    <select
                        className='w-full px-3 py-2 border-2 border-gray-300 rounded'
                        onChange={e => setLevel(e.target.value)}
                    >
                        <option value="Beginner level">Beginner Level</option>
                        <option value="Intermediate level">Intermediate Level</option>
                        <option value="Senior level">Senior Level</option>
                    </select>
                </div>
            </div>

            <div>
                <p className='mb-2 font-medium'>Job Salary</p>
                <input
                    min={0}
                    type="number"
                    placeholder='2500'
                    onChange={e => setSalary(e.target.value)}
                    className='px-3 py-2 border-2 border-gray-300 rounded w-[120px]'
                />
            </div>

            <button className='w-28 py-3 mt-4 bg-black text-white rounded'>ADD</button>
        </form>
    )
}

export default AddJob
