import { getTodos, addTodo, toggleTodo, deleteTodo, clearCompletedTodos } from './state.js';
import { loadFilterPreference, saveFilterPreference } from './storage.js';
import { escapeHtml } from './utils.js';

// DOM elements (assigned in initUI)
let todoListEl, todoInput, addBtn, statsCounter, clearCompleteBtn, filterBtns;

// Current active filter
let currentFilter = loadFilterPreference();

export function initUI(elements) {
    todoListEl = elements.todoList;
    todoInput = elements.todoInput;
    addBtn = elements.addBtn;
    statsCounter = elements.statsCounter;
    clearCompleteBtn = elements.clearCompleteBtn;
    filterBtns = elements.filterBtns;
}

// Helper to attach dynamic events after each render
function attachTodoEvents() {
    // Checkboxes
    todoListEl.querySelectorAll(".todo-check").forEach(checkbox => {
        checkbox.removeEventListener("change", handleCheckChange);
        checkbox.addEventListener("change", handleCheckChange);
    });
    // Delete buttons
    todoListEl.querySelectorAll(".delete-btn").forEach(btn => {
        btn.removeEventListener("click", handleDeleteClick);
        btn.addEventListener("click", handleDeleteClick);
    });
}

function handleCheckChange(e) {
    e.stopPropagation();
    const id = Number(e.target.getAttribute("data-id"));
    if (!isNaN(id)) {
        toggleTodo(id);
        renderTodos();
    }
}

function handleDeleteClick(e) {
    e.stopPropagation();
    const btn = e.currentTarget;
    const id = Number(btn.getAttribute("data-id"));
    if (!isNaN(id)) {
        deleteTodo(id);
        renderTodos();
    }
}

function updateFilterButtonUI() {
    filterBtns.forEach(btn => {
        const filterValue = btn.getAttribute("data-filter");
        if (filterValue === currentFilter) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    saveFilterPreference(currentFilter);
}

export function setFilter(filter) {
    if (filter === "all" || filter === "active" || filter === "completed") {
        currentFilter = filter;
        renderTodos();
        updateFilterButtonUI();
    }
}

export function renderTodos() {
    const todos = getTodos();
    let filteredTodos = [];

    if (currentFilter === "active") {
        filteredTodos = todos.filter(t => !t.completed);
    } else if (currentFilter === "completed") {
        filteredTodos = todos.filter(t => t.completed);
    } else {
        filteredTodos = [...todos];
    }

    if (filteredTodos.length === 0) {
        let emptyMsg = "";
        if (currentFilter === "all" && todos.length === 0) emptyMsg = "✨ no tasks yet · add one above";
        else if (currentFilter === "active" && todos.filter(t => !t.completed).length === 0) emptyMsg = "🎉 all tasks completed! (switch to 'all' to see)";
        else if (currentFilter === "completed") emptyMsg = "📭 no completed tasks yet";
        else emptyMsg = "nothing matches this filter";
        todoListEl.innerHTML = `<div class="empty-message">${escapeHtml(emptyMsg)}</div>`;
    } else {
        todoListEl.innerHTML = filteredTodos.map(todo => `
            <li class="todo-item" data-id="${todo.id}">
                <input type="checkbox" class="todo-check" ${todo.completed ? "checked" : ""} data-id="${todo.id}">
                <span class="todo-text ${todo.completed ? "completed" : ""}">${escapeHtml(todo.text)}</span>
                <button class="delete-btn" data-id="${todo.id}" aria-label="delete">✕</button>
            </li>
        `).join("");
    }

    // Update stats
    const total = todos.length;
    const remaining = todos.filter(t => !t.completed).length;
    const completedCount = total - remaining;
    if (total === 0) {
        statsCounter.innerText = `📌 0 tasks`;
    } else {
        statsCounter.innerText = `📋 ${remaining} left · ${completedCount} done`;
    }

    attachTodoEvents();
}

export function bindGlobalEvents() {
    addBtn.addEventListener("click", () => {
        const text = todoInput.value;
        if (addTodo(text)) {
            todoInput.value = "";
            renderTodos();
            todoInput.focus();
        } else if (text.trim() === "") {
            // visual feedback
            todoInput.style.borderColor = "#facc15";
            setTimeout(() => { todoInput.style.borderColor = "#e2e8f0"; }, 400);
        }
    });

    todoInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addBtn.click();
        }
    });

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const filterValue = btn.getAttribute("data-filter");
            setFilter(filterValue);
        });
    });

    clearCompleteBtn.addEventListener("click", () => {
        clearCompletedTodos();
        renderTodos();
    });
}