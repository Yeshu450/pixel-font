import React, { useState, useRef } from 'react';
import './App.css';
import screenshot from "html2canvas"

function App() {

    const[txtcolor, setTxtColor] = useState('000')
    const[bgcolor, setBgColor] = useState('000')
    const [fntSize, setFntSize] = useState(16); 
    const image = useRef()

    const textColor = (colorName) => {
        image.current.style.color = colorName
    }

    const bgColor = (colorName) => {
        image.current.style.backgroundColor = colorName
    }

    const bgImage = (Image) => {
        image.current.style.backgroundImage =  `url(${Image})`
    }

    const fontFamily = (fontName) => {
        image.current.style.fontFamily=fontName
    }

    const textAlign = (alignment) => {
        image.current.style.textAlign=alignment
    }

    const fontSize = (size) => {
        image.current.style.fontSize = `${size}px`
    };

    const downloadImage = () =>{
        screenshot(image.current).then(canvas => {
            const imageData = canvas.toDataURL("image/png")
            const link = document.createElement('a')
            link.href=imageData
            link.download="pixel-font.png"
            link.click()
        });
    }
    

	return (
		<>
			<header>
				<h1 id='heading'>Pixel Font</h1>
			</header>
			<main id='parent'>
				<section id='child1'>
					<div contentEditable='true' id='text' ref={image}>
						Write your text...
					</div>
					<button id='download' onClick={downloadImage} >Download</button>
				</section>
				<section id='child2'>
					<div id='text-color'>
                        <h2 className='sub-heading'>Text Colors</h2>
                        <div className='names'>
                            <button id='red' onClick={() => {textColor('red')}} title='red'></button>
                            <button id='yellow' onClick={() => {textColor('yellow')}} title='yellow'></button>
                            <button id='orange' onClick={() => {textColor('orange')}} title='orange'></button>
                            <button id='blue' onClick={() => {textColor('blue')}} title='blue'></button>
                            <button id='green' onClick={() => {textColor('green')}} title='green'></button>
                            <button id='violet' onClick={() => {textColor('violet')}} title='violet'></button>

                            <input 
                                type='color'
                                value={txtcolor}
                                onChange={(e) => {
                                setTxtColor(e.target.value)
                                textColor(e.target.value)
                                }}
                                className='palette'
                                title='choose more colors'
                            />
                        </div>
                    </div>
                    <div id='bg-color'>
                        <h2 className='sub-heading'>Background Colors</h2>
                        <div className='names'>
                            <button id='red' onClick={() => {bgColor('red')}} title='red'></button>
                            <button id='yellow' onClick={() => {bgColor('yellow')}} title='yellow'></button>
                            <button id='orange' onClick={() => {bgColor('orange')}} title='orange'></button>
                            <button id='blue' onClick={() => {bgColor('blue')}} title='blue'></button>
                            <button id='green' onClick={() => {bgColor('green')}} title='green'></button>
                            <button id='violet' onClick={() => {bgColor('violet')}} title='violet'></button>

                            <input 
                                type='color'
                                value={bgcolor}
                                onChange={(e) => {
                                setBgColor(e.target.value)
                                bgColor(e.target.value)
                                }}
                                className='palette'
                                title='choose more colors'
                            />
                        </div>
                    </div>
                    <div id='fonts'>
                    <h2 className='sub-heading'>Fonts</h2>
                        <div className='font'>
                            <h1 id='times-new' onClick={() => {fontFamily('Times New Roman')}} title='Times-New-Roman'>Hello</h1>
                            <h1 id='cursive' onClick={() => {fontFamily('cursive')}} title='Cursive'>Hello</h1>
                            <h1 id='verdana' onClick={() => {fontFamily('verdana')}} title='verdana'>Hello</h1>
                            <h1 id='arial'  onClick={() => {fontFamily('arial')}} title='Arial'>Hello</h1>
                            <h1 id='impact' onClick={() => {fontFamily('Impact')}} title='Impact'>Hello</h1>
                        </div>
                    </div>
                    <div id='alignment'>
                    <h2 className='sub-heading'>Text Alignments</h2>
                        <div className='text-align'>
                            <h1 className='align' onClick={() => {textAlign('justify')}}>Justify</h1>
                            <h1 className='align' onClick={() => {textAlign('left')}}>Left</h1>
                            <h1 className='align' onClick={() => {textAlign('center')}}>Center</h1>
                            <h1 className='align' onClick={() => {textAlign('right')}}>Right</h1>
                        </div>
                    </div>
                    <div id='font-size'>
                    <h2 className='sub-heading'>Font Size</h2>                 
                        <span>{fntSize}px</span> 
                        <div className='names'>
                            <input
                                    type='range'
                                    min='16'
                                    max='40'
                                    value={fntSize}
                                    title={fntSize}
                                    onChange={(e) => {
                                        setFntSize(e.target.value)
                                        fontSize(e.target.value)
                                    }}
                                    id="range"
                                />
                        </div>
                    </div>
				</section>
			</main>
            <br></br>
            <div id='bg-images'>
                <h2 className='sub-heading'>Background Images</h2>
                <div id='images'>
                    <img src="/1.png" alt="" onClick={() => {bgImage('/1.png')}}/>
                    <img src="/2.png" alt="" onClick={() => {bgImage('/2.png')}}/>
                    <img src="/3.png" alt="" onClick={() => {bgImage('/3.png')}}/>
                    <img src="/4.png" alt="" onClick={() => {bgImage('/4.png')}}/>
                    <img src="/5.png" alt="" onClick={() => {bgImage('/5.png')}}/>
                    <img src="/6.png" alt="" onClick={() => {bgImage('/6.png')}}/>
                    <img src="/7.png" alt="" onClick={() => {bgImage('/7.png')}}/>
                    <img src="/8.png" alt="" onClick={() => {bgImage('/8.png')}}/>
                    <img src="/9.png" alt="" onClick={() => {bgImage('/9.png')}}/>
                </div>
            </div>
            <footer id='footer'>
                <p>&copy; 2025 Yeswanth Kumar Rallapilla &trade;.</p> <p>All Rights Reserved &reg;. </p>
            </footer>
		</>
	);
}

export default App;
