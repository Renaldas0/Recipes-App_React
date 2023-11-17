import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

function Settings() {

    const [settings, setSettings] = useState({
        '--background-color': '#fff',
        '--background-light': '#fff',
        '--shadow-color': 'rgba(0, 0, 0, 0.2)',
        '--primary-color': 'rgb(255, 0, 86)',
        '--text-color': '#0a0a0a',
        '--text-light': '#575757',
        '--font-size': '16px',
        '--animation-speed': 1
    });
    useEffect(() => {
        const root = document.documentElement
        for (let key in settings) {
            root.style.setProperty(key, settings[key]);
        }
    }, [settings])

    const [theme, setTheme] = useState("light");
    const themes = [
        {
            '--background-color': '#fff',
            '--background-light': '#fff',
            '--shadow-color': 'rgba(0, 0, 0, 0.2)',
            '--text-color': '#0a0a0a',
            '--text-light': '#575757'
        },
        {
            '--background-color': 'rgb(29, 29, 29)',
            '--background-light': 'rgb(77, 77, 77)',
            '--shadow-color': 'rgba(0, 0, 0, 0.2)',
            '--primary-color': 'rgb(255, 0, 86)',
            '--text-color': '#fff',
            '--text-light': '#eceaea',
        }
    ];

    function changeTheme(i) {
        const _theme = { ...themes[i] };
        setTheme(i === 0 ? "light" : "dark");
        // Update settings
        let _settings = { ...settings }
        for (let key in _theme) {
            _settings[key] = _theme[key]
        }
        setSettings(_settings)
    }

    const [primaryColor, setPrimaryColor] = useState(0);
    const primaryColors = [
        "rgb(255, 0, 86)",
        "rgb(33, 150, 243)",
        "rgb(255, 193, 7)",
        "rgb(0, 200, 83)",
        "rgb(156, 39, 176)"
    ];

    function changeColor(i) {
        const _color = primaryColors[i];
        let _settings = { ...settings }
        _settings["--primary-color"] = _color
        setPrimaryColor(i)
        setSettings(_settings);
    }

    const fontSizes = [
        {
            title: "Small",
            value: "12px"
        },
        {
            title: "Medium",
            value: "16px"
        },
        {
            title: "Large",
            value: "20px"
        },
    ];

    const [fontSize, setFontSize] = useState(1);

    function changeFontSize(i) {
        const _fontSize = fontSizes[i];
        let _settings = { ...settings }
        _settings["--font-size"] = _fontSize.value
        setFontSize(i)
        setSettings(_settings);
    };

    const animationSpeeds = [
        {
            title: "Slow",
            value: "2"
        },
        {
            title: "Medium",
            value: "1"
        },
        {
            title: "Fast",
            value: ".5"
        },
    ];

    const [animationSpeed, setAnimationSpeed] = useState(1);

    function changeAnimationSpeed(i) {
        const _animationSpeed = animationSpeeds[i];
        let _settings = { ...settings }
        _settings["--animation-speed"] = _animationSpeed.value
        setAnimationSpeed(i)
        setSettings(_settings);
    };


    return (
        <div>
            <div className="section d-block">
                <h2>Choose Theme</h2>
                <div className="options-container">
                    <div className="option light" onClick={() => changeTheme(0)}>

                        {theme === "light" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                    <div className="option dark" onClick={() => changeTheme(1)}>
                        {theme === "dark" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="section d-block">
                <h2>Primary Colour</h2>
                <div className="options-container">
                    {primaryColors.map((color, index) => (
                        <div className="option light" style={{ backgroundColor: color }} on onClick={() => changeColor(index)}>

                            {primaryColor === index && (
                                <div className="check">
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            </div>

            <div className="section d-block">
                <h2>Font Size</h2>
                <div className="options-container">
                    {fontSizes.map((size, index) => (

                        <button className="btn" onClick={() => changeFontSize(index)}>
                            {size.title}

                            {fontSize === index && (
                                <span><FontAwesomeIcon icon={faCheck} /></span>
                            )}

                        </button>
                    ))}
                </div>
            </div>

            <div className="section d-block">
                <h2>Animation speed</h2>
                <div className="options-container">
                    {animationSpeeds.map((speed, index) => (

                        <button className="btn" onClick={() => changeAnimationSpeed(index)}>
                            {speed.title}

                            {animationSpeed === index && (
                                <span><FontAwesomeIcon icon={faCheck} /></span>
                            )}

                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Settings;