async function handleCreateUser(event) {
    event.preventDefault();
    try {
        await createUser(getFormData());
        showSuccess("User created!");
    } catch (error) {
        showError(error.message);       // ← catches errors from ANY layer
    }
}