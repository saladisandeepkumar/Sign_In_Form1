function validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9]{8,}$/;
    if(values.name===""){
        error.name="Name should not be empty"

    }

    else{
        error.name = "";
    }

    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password must contain at least one uppercase, one lowercase letter, and be at least 8 characters long";
    }

    return error;
}

// ✅ Ensure default export
export default validation;
