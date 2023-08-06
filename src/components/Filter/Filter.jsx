import css from './Filter.module.css'

function Filter({ value, onChange }) {
    return(
        <>
            <label className={css.title}>Find contacts by name</label>
                <input
                    className={css.input_filter}
                    type="text"
                    value={value}
                    onChange={onChange}
                ></input>
        </>
    )
}

export default Filter