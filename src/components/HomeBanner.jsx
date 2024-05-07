import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect';

export const HomeBanner = ({ title, text, hasAnimation = false }) => {

    const [options, setOptions] = useState('');
    
    useEffect(() => {
        if (hasAnimation) {
            const options = {
                strings: [title],
                autoStart: true,
                loop: true,
                deleteSpeed: 70,
            }
            setOptions(options);
        }
    }, [title, hasAnimation]);

    return (
        <div className='home-banner'>
            {
                hasAnimation ?
                    <h1 className='home-banner__title'>
                        <Typewriter
                            options={options}
                        />
                    </h1>
                    :
                    <>
                        <h1 className='home-banner__title'>
                            {title}
                        </h1>
                    </>
            }
            <h3 className='home-banner__text'>{text}</h3>
        </div>
    )
}
