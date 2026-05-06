async function createUser(userData) {
    validateUser(userData);
    const normalizedUser = normalizeUser(userData);
    await database.save(normalizedUser);
    await emailService.sendWelcome(normalizedUser.email);
    return normalizedUser;
}