import React from 'react'


function Form(props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name
                    <input
                        type="text"
                        onChange={onChange}
                        value={values.name}
                        name="name"
                    />
                </label>
                <label>Email
                    <input 
                        type="email"
                        onChange={onChange}
                        value={values.email}
                        name="email"
                    />
                </label>
                <label>Role
                    <select onChange={onChange} value={values.role} name="role">
                        <option value="">-- Select a Role --</option>
                        <option value="instructor">backend engineer</option>
                        <option value="student">frontend engineer</option>
                        <option value="ta">designer</option>
                    </select> 
                </label>
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default Form;