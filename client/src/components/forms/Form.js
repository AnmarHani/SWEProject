const Form = (props) => {
    // const handleSubmit = (e) => {
    //     e.preventDefault()
        
    //     let formData = {};
    
    //     for (let i = 0; i < e.target.length; i++) {
    //         if(e.target.elements[i].getAttribute("name") === null) continue

    //         formData[e.target.elements[i].getAttribute("name")] = e.target.elements[i].value;
    //     }
        
    //     props.setForm(formData)

    //     props.onSubmit()
    // }

    return (
        <form {...props} className="form" onSubmit={props.onSubmit}>
            {props.children}
        </form>
    )
}

export default Form