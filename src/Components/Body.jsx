import React, { createContext, useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Container from './TextContainer/Container'


export const BodyContext = createContext();

const Body = () => {

    const programmingLang = [
        {
            lang : 'C',
            selected : false,
        },
        {
            lang : 'Cpp',
            selected : true,
        },
        {
            lang : 'Java',
            selected : false,
        },
        {
            lang : 'Python',
            selected : false,
        },
        {
            lang : 'Js',
            selected : false,
        },
    ];

    const [fontSize, setFontSize] = useState(18)
    const [lineHeight, setLineHeight] = useState(1)
    const [words, setWords] = useState(10);
    const [random, setRandom] = useState(true);
    const [fontStyle, setFontStyle] = useState('Source Code Pro');
    const [programmingArray, setProgrammingArray] = useState(programmingLang)
    const [sentenceType, setSentenceType] = useState('programming')
    const [normalType, setNormalType] = useState('small')
    const [historyArray, setHistoryArray] = useState([])

    const setParameters = () => {

        const _fontSize = JSON.parse(localStorage.getItem('fontSize'));
        const _lineHeight = JSON.parse(localStorage.getItem('lineHeight'));
        const _words = JSON.parse(localStorage.getItem('words'));
        const _random = JSON.parse(localStorage.getItem('random'));
        const _fontStyle = JSON.parse(localStorage.getItem('fontStyle'));
        const _programmingArray = JSON.parse(localStorage.getItem('programmingArray'));
        const _sentenceType = JSON.parse(localStorage.getItem('sentenceType'))
        const _normalType = JSON.parse(localStorage.getItem('normalType'))

        _fontSize ? setFontSize(_fontSize) : setFontSize(18);
        _lineHeight ? setLineHeight(_lineHeight) : setLineHeight(1);
        _words ? setWords(_words) : setWords(10);
        _random !== null ? setRandom(_random) : setRandom(true);
        _fontStyle ? setFontStyle(_fontStyle) : setFontStyle('Source Code Pro');
        _programmingArray ? setProgrammingArray(_programmingArray) : setProgrammingArray(programmingLang);
        _sentenceType ? setSentenceType(_sentenceType) : setSentenceType('programming')
        _normalType ? setNormalType(_normalType) : setNormalType ('small');
        // console.log(_historyArray);
        // _historyArray ? setHistoryArray(_historyArray) : setHistoryArray([])

    }

    useEffect(() => {

        setParameters();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    


    return (
        <BodyContext.Provider value={{
            fontSize, setFontSize,
            lineHeight, setLineHeight,
            words, setWords,
            random, setRandom,
            fontStyle, setFontStyle,
            programmingArray,setProgrammingArray,
            sentenceType, setSentenceType,
            normalType, setNormalType,
            historyArray, setHistoryArray
        }}>

            <div style={{
                color: 'rgba(255, 255, 255, 0.5)',
                padding: '3rem 5rem',
            }} >
                <div style={{
                    backgroundColor: 'rgb(34, 43, 54)',
                    borderRadius: '10px',
                    display: 'flex',
                    height: '85vh',
                }} >
                    <Sidebar />
                    <Container />
                </div>
            </div>
        </BodyContext.Provider>
    )
}

export default Body
