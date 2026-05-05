const STORAGE_KEY_TODOS = "todos";
const STORAGE_KEY_FILTER = "todos_filter_pref";

export function saveTodos(todos) {
    try {
        localStorage.setItem(STORAGE_KEY_TODOS, JSON.stringify(todos));
        return true;
    } catch (e) {
        console.error("Failed to save todos", e);
        return false;
    }
}

export function loadTodos() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY_TODOS);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        console.warn("Failed to load todos", e);
        return [];
    }
}

export function saveFilterPreference(filter) {
    try {
        localStorage.setItem(STORAGE_KEY_FILTER, JSON.stringify(filter));
        return true;
    } catch (e) {
        console.error("Failed to save filter preference", e);
        return false;
    }
}

export function loadFilterPreference() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY_FILTER);
        return raw ? JSON.parse(raw) : "all";
    } catch (e) {
        console.warn("Failed to load filter preference", e);
        return "all";
    }
}