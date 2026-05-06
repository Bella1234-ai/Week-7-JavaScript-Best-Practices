function processUser(userData) {
    // Validate    ← reason 1 to change
    // Transform   ← reason 2 to change
    // Save to DB  ← reason 3 to change
    // Send email  ← reason 4 to change
    // Update UI   ← reason 5 to change
}

// This is the Single Responsibility Principle (SRP) — each function should do exactly one thing and do it well.
// This function has 5 reasons to change. If your email template updates, you touch the same function that handles validation. If your DB changes, you risk breaking the UI update. Everything is tangled.
