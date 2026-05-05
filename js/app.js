import { initUI, renderTodos, bindGlobalEvents, setFilter } from './ui.js';
import { loadFilterPreference } from './storage.js';

document.addEventListener("DOMContentLoaded", () => {
    const elements = {
        todoList: document.getElementById("todoList"),
        todoInput: document.getElementById("todoInput"),
        addBtn: document.getElementById("addBtn"),
        statsCounter: document.getElementById("statsCounter"),
        clearCompleteBtn: document.getElementById("clearCompleteBtn"),
        filterBtns: document.querySelectorAll(".filter-btn")
    };

    initUI(elements);
    renderTodos();

    // Restore saved filter preference
    const savedFilter = loadFilterPreference();
    setFilter(savedFilter);

    bindGlobalEvents();
});