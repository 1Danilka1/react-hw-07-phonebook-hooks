import css from './Filter.module.css'

function Filter({filter, onChange}) {
    return(
        <>
            <label className={css.title}>Find contacts by name</label>
                <input
                    className={css.input_filter}
                    type="text"
                    value={filter}
                    onChange={onChange}
                ></input>
        </>
    )
}

export default Filter