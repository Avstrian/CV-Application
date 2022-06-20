import './App.css';
import { useState, useEffect } from 'react';

import CVform from './components/CVform/CVform';
import CVpreview from './components/CVpreview/CVpreview';

const App = () => {

    const [attributes, setAttributes] = useState({
        name: '',
        userDescription: '',
        number: '',
        email: '',
        adress: '',
        github: '',
        degree: '',
        university: '',
        uniStart: '',
        uniEnd: '',
        uniPresent: false,
        average: '',
        position: '',
        workplace: '',
        start: '',
        end: '',
        present: false,
    });

    useEffect(() => {
        const handleInputChange = (event) => {
            if (event.target.tagName === 'INPUT') {
                const key = event.target.id;
                const value = event.target.value;

                if (key === 'present' || key === 'uniPresent') {
                    if (event.target.checked) {
                        setAttributes({ ...attributes, [key]: true });
                    } else {
                        setAttributes({ ...attributes, [key]: false });
                    }
                } else {
                    setAttributes({ ...attributes, [key]: value });
                }
            }
        };

        document.addEventListener('input', handleInputChange);

        return () => {
            document.removeEventListener('input', handleInputChange);
        };

    }, [attributes]);


    return (
        <div className='main-container'>
            <CVform attributes={attributes} />
            <CVpreview attributes={attributes} />
        </div>
    )
}


export default App;
