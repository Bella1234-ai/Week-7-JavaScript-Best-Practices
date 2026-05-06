function validateUser(userData) {
    if (!userData.email.includes("@")) throw new Error("Invalid email");
    if (userData.age < 18) throw new Error("Must be adult");
    return true;
}