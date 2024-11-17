import React, { useRef, useState } from "react";
import "./toggleThemeButton.css";

const ToggleThemeButton = () => {
    const [darkTheme, setDarkTheme] = useState(false);

    return (
        <div className="toggle-btn-wrapper">
            <label for="dark" className="label-light">День</label>
            <input type="checkbox" id="dark" checked={!darkTheme} />
            <label for="light" className="label-dark">Ночь</label>
            <input type="checkbox" id="light" checked={darkTheme} />
            <button className="toggle-btn" onClick={() => setDarkTheme(!darkTheme)}>
                Переключение темы
            </button>
        </div>
    )
};

export default ToggleThemeButton;