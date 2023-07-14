import React, { useContext, useEffect, useRef, useState } from 'react'
import { BodyContext } from '../Body'
import { LangData, Paragraphs } from './KeyWords'


const Container = () => {

    const [sentence, setSentence] = useState("")
    const [inputText, setInputText] = useState("")
    const [actualSentence, setActualSentence] = useState("")
    const [sentenceArray, setSentenceArray] = useState([])

    const [startTime, setStartTime] = useState(null)

    const divRef = useRef(null);


    const {
        fontSize,
        lineHeight,
        words,
        random,
        fontStyle,
        programmingArray,
        sentenceType,
        normalType,
        historyArray, setHistoryArray
    } = useContext(BodyContext)


    function generateSentence(programmingWords) {



        var sentence = "";
        for (let i = 0; i < 1; i++) {
            const word = programmingWords[Math.floor(Math.random() * programmingWords.length)];
            sentence += word;
        }
        return sentence;
    }

    const getSentence = () => {
        const programmingWords = [];

        programmingArray.forEach(element => {
            if (element.selected) {
                programmingWords.push(...LangData[element.lang]);
            }
        });
        console.log(programmingWords[0]);
        var sentences = [];
        let generateRand = (Math.floor(Math.random() * words) + 1);
        while(generateRand < 9) generateRand = (Math.floor(Math.random() * words) + 1);
        const randomNumber = random ? generateRand : words;
        for (let i = 0; i < randomNumber; i++) {
            sentences.push(generateSentence(programmingWords));
        }

        setActualSentence(sentences.join(' '));
        var arr = []
        for (let i = 0; i < sentences.join(' ').length; i++) {
            arr.push(0);
        }
        setSentenceArray(arr);
        return <span> {sentences.join(' ')}</span>;
    }


    function getRandomChunk(paragraph, size) {
        const words = paragraph.split(' ');
        let randomIndex = Math.floor(Math.random() * (words.length - size + 1));
        // while(randomIndex > words.length - 10) randomIndex = Math.floor(Math.random() * (words.length - size + 1));
        // if(words.slice(randomIndex, randomIndex + size).length < 10) return words.slice(0,)
        return words.slice(randomIndex, randomIndex + size);
    }


    function getRandomParagraph() {
        const randomIndex = Math.floor(Math.random() * Paragraphs.length);
        return Paragraphs[randomIndex];
    }

    const getPara = () => {
        const paragraph = getRandomParagraph();
        const resizePara = getRandomChunk(paragraph, words).join(' ');

        // const randomIndex = Math.floor(Math.random() * resizePara.length);
        const randomIndex =  Math.floor(Math.random() * (resizePara.length - 10 + 1)) + 10
        console.log(randomIndex);
        const result = random ?
            (
                getRandomChunk(resizePara, randomIndex).join(' ')
            )
            : resizePara;
        const finalResult = normalType === 'small' ? result.toLowerCase() : 
                            normalType === 'capital' ? result.toUpperCase() : result
        setActualSentence(finalResult);
        var arr = []
        for (let i = 0; i < finalResult.length; i++) {
            arr.push(0);
        }
        setSentenceArray(arr);

        return <span> {finalResult} </span>
    }


    useEffect(() => {
        setSentence(
            sentenceType === "programming" ?
                getSentence() : getPara()
        );
        setInputText("")
    }, [random, words, programmingArray, sentenceType, normalType])
    

    
    
    const handleChange = (text) => {
        setInputText(text);
        sentenceArray[text.length - 1] = actualSentence[text.length - 1] === text[text.length - 1] ? 1 : 2
        setSentenceArray(sentenceArray);

        console.log(sentenceArray);
        if(text.length === 1){
            setStartTime(Date.now());
        }

        var arr = [];
        for (let i = 0; i < sentenceArray.length; i++) {
            if (sentenceArray[i] === 1) {
                arr.push(
                    <span style={{ color: 'green' }} >{actualSentence[i] === ' ' ? '_' : actualSentence[i]}</span>
                );
                continue;
            }
            if (sentenceArray[i] === 2) {
                arr.push(
                    <span style={{ color: '#ff4569' }} >{actualSentence[i] === ' ' ? '_' : actualSentence[i]}</span>
                );
                continue;
            }
            arr.push(
                <span>{actualSentence[i]}</span>
            );
        }
        setSentence(<span> {arr} </span>)

        if (text.length === actualSentence.length) {
            let total_1 = 0;
            for (let i = 0; i < sentenceArray.length; i++) {
                if(sentenceArray[i] === 1) total_1 += 1;   
            }
            historyArray.push({
                sentence: <span> {arr} </span>,
                Date: Date.now(),
                progress : Math.floor((total_1 * 100) / sentenceArray.length),
                speed : Math.round(actualSentence.split(' ').length / (((Date.now() - startTime) / 1000) / 60))
            })
            localStorage.setItem('historyArray', JSON.stringify(historyArray));
            setHistoryArray(historyArray)
            // setOpen(true);
            setSentence(
                sentenceType === "programming" ?
                    getSentence() : getPara()
            );
            setInputText("");
            const scrollPosition = divRef.current.scrollHeight;
            console.log(scrollPosition);
            divRef.current.scrollTo(0, scrollPosition);
        };

    }


    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    const formatDate = (date) => {
        const newDate = new Date(date);
        return `${padTo2Digits(newDate.getDate())} ${months[newDate.getMonth()]} ${newDate.getFullYear()}`
    }


    const checkAgo = (time) => {
        if (time <= 24) {
            return `${time} hours ago`
        } else if (time <= 730) {
            return `${parseInt(Math.floor(time / 24))} days ago`
        } else if (time <= 8766) {
            return `${parseInt(Math.floor(time / 24) / 30)} months ago`
        }

        return `${parseInt(Math.floor(time / 24) / 365)} years ago`
    }

    const convertDateToActualTime = (time) => {

        const date1 = new Date();
        const date2 = new Date(time);

        const difference = Math.abs(date1.getTime() - date2.getTime()) / 3600000

        if (difference < 1) {
            if (Math.floor(difference * 60) === 0) return `now`
            return `${Math.floor(difference * 60)} minute ago`
        }

        return checkAgo(parseInt(difference));

    }




    return (
        <div style={{
            fontSize: `${fontSize}px`,
            fontWeight: 'bold',
            margin: '1rem',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }} >
            {/* <AlertDialog open={open} setOpen={setOpen} progress={progress} time={ Math.round(actualSentence.split(' ').length / (time / 60))} /> */}
            <div ref={divRef} style={{
                color: "rgba(255, 255, 255, 0.5)",
                fontSize: `${fontSize}px`,
                display: 'flex',
                flexDirection: 'column',
                height: "95%",
                overflowY: 'scroll',
                paddingBottom: `${lineHeight + 8}rem`,
                fontFamily: `${fontStyle}`
                // flexDirection:'column-reverse'
            }} >
                {

                    historyArray.map((e, index) => {
                        return <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginBottom: `.${lineHeight + 5}rem`
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                lineHeight: `${lineHeight}.3em`,

                            }} >
                                {e.sentence}

                            </div>
                            <span style={{
                                fontSize: '13px'
                            }} >
                                line : {index + 1} , Time : {convertDateToActualTime(e.Date)} , Accuracy : {e.progress} % , Speed : {e.speed} WPM
                            </span>
                        </div>
                    })
                }
                <div style={{
                    display: 'flex',
                }} >

                    {sentence}
                </div>

            </div>
            <input type='text'
                placeholder='Type...'
                autoFocus={true}
                value={inputText}
                onChange={(e) => handleChange(e.target.value)}
                onKeyDown={(event) => {
                    if (event.key === "Backspace" || event.key === "Delete") {

                        event.preventDefault();   // turn off browser transition to the previous page 

                    };
                }}
                style={{
                    width: '100%',
                    height: '8%',
                    resize: 'none',
                    backgroundColor: 'transparent',
                    outline: "none",
                    border: 'none',
                    color: "rgba(255, 255, 255, 0.5)",
                    fontSize: '18px',
                    fontFamily: `${fontStyle}`,
                    fontWeight: "bold"
                }} >

            </input>
        </div>
    )
}

export default Container