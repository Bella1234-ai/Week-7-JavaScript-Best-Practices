import { loadTodos, saveTodos } from './storage.js';

// In-memory cache (loaded once at startup)
let todos = loadTodos();

function persist() {
    saveTodos(todos);
}

export function getTodos() {
    // Return a copy to prevent external mutation
    return [...todos];
}

export function addTodo(text) {
    const trimmed = text.trim();
    if (trimmed === "") return false;
    const newTodo = {
        id: Date.now(),
        text: trimmed,
        completed: false,
        createdAt: new Date().toISOString()
    };
    todos.push(newTodo);
    persist();
    return true;
}

export function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        persist();
        return true;
    }
    return false;
}

export function deleteTodo(id) {
    const initialLength = todos.length;
    todos = todos.filter(t => t.id !== id);
    if (todos.length !== initialLength) {
        persist();
        return true;
    }
    return false;
}

export function clearCompletedTodos() {
    const filteredTodos = todos.filter(t => !t.completed);
    if (filteredTodos.length === todos.length) return false;
    todos = filteredTodos;
    persist();
    return true;
}

// For optional reset (not used by UI)
export function resetTodos(newTodos = []) {
    todos = newTodos;
    persist();
}