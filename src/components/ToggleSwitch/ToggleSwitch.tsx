import css from "./ToggleSwitch.module.css"


const ToggleSwitch = () => {

    const change: () => void = () => {
        document.body.classList.toggle("night");
    }

    return (
        <div className={css.change_background}>
            <h3>Theme</h3>
            <label className={css.switch}>
                <input className={css.field} type="checkbox" onClick={change}/>
                <span className={css.slider}></span>
            </label>
        </div>
    );
};

export {ToggleSwitch}