<!-- ================= HEADER ================= -->

<h1 align="center">🚀 GitHub Issue Tracker</h1>

<h3 align="center">
A Full-Stack Issue Tracking System Inspired by GitHub Issues
</h3>

<p align="center">
  Build • Track • Manage • Collaborate
</p>

<br/>

<p align="center">
  <img src="https://img.shields.io/github/repo-size/ZunaedAfif10/github-issue-tracker?color=blue" />
  <img src="https://img.shields.io/github/languages/top/ZunaedAfif10/github-issue-tracker" />
  <img src="https://img.shields.io/github/last-commit/ZunaedAfif10/github-issue-tracker" />
  <img src="https://img.shields.io/github/issues/ZunaedAfif10/github-issue-tracker" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-success" />
  <img src="https://img.shields.io/badge/Open%20Source-Yes-brightgreen" />
  <img src="https://img.shields.io/badge/PRs-Welcome-orange" />
</p>

---

<!-- ================= INTRO ================= -->

## 📌 About The Project

GitHub Issue Tracker is a **modern full-stack web application** that allows developers and teams to efficiently manage software issues, bugs, and feature requests.

Inspired by GitHub’s built-in issue tracking system, this project demonstrates how real-world development tools are designed and implemented.

It provides a clean interface and powerful backend to help you stay organized, productive, and collaborative.

---

## 🎯 Why This Project?

Managing issues is a critical part of software development.

According to GitHub, issue tracking systems are used to **plan, discuss, and manage work such as bugs, features, and improvements** ([GitHub Docs][1])

This project was built to replicate that workflow in a simplified but practical way.

---

## 💡 What You Can Do With It

✔ Track bugs and issues
✔ Manage development tasks
✔ Collaborate with team members
✔ Organize work using labels & statuses
✔ Build real-world full-stack skills

---

## 🌟 Highlights

* 🔥 Clean and modern UI
* ⚡ Fast and responsive system
* 🔐 Authentication-ready architecture
* 📦 Scalable backend structure
* 🧩 Modular and maintainable code

---

## 🧭 Project Vision

This project aims to evolve into a **complete developer productivity tool**, similar to:

* GitHub Issues
* Jira
* Linear

But with a simpler, developer-friendly experience.

---

<!-- ================= PREVIEW PLACEHOLDER ================= -->

## 🖼️ Preview

> 🚧 Screenshots / Demo will be added here



---

<!-- ================= QUICK NAV ================= -->

## 📚 Table of Contents

* 📌 About
* ⚙️ Tech Stack
* 🚀 Installation
* 🔧 Configuration
* 📂 Project Structure
* ✨ Features
* 🤝 Contributing
* 📄 License

---

<!-- ================= TECH STACK ================= -->

## ⚙️ Tech Stack

This project is built using a **frontend-focused architecture**, emphasizing core JavaScript concepts and API integration.

### 🧩 Core Technologies

* 🌐 HTML5 — Structure & layout
* 🎨 Tailwind CSS — Modern styling & responsiveness
* ⚡ Vanilla JavaScript (ES6+) — Application logic

---

### 🔌 API Integration

* 📡 Fetch API for asynchronous requests
* 🔄 Real-time data rendering from external APIs
* ❗ Error handling for failed requests

---

### 🧠 Key Concepts Practiced

This project focuses heavily on mastering:

* DOM Manipulation
* Event Handling
* Asynchronous JavaScript (Promises, async/await)
* API Data Fetching & Rendering
* State handling in Vanilla JS

---

<!-- ================= FEATURES ================= -->

## ✨ Features

A lightweight but powerful issue tracking interface built entirely with JavaScript.

---

### 🐞 Issue Handling (UI-Based)

* Create issues dynamically
* Display issue data from API
* Update UI without page reload

---

### 🔍 Search & Filtering

* Filter issues dynamically
* Instant UI updates using JavaScript

---

### ⚡ Dynamic UI Rendering

* Render data directly from API responses
* Update elements in real-time
* No page refresh required

---

### 🎯 Event-Driven Architecture

* Button click handling
* Form submission logic
* Interactive UI behaviors

---

### 📡 API Fetching

* Fetch issue data from API
* Handle loading & error states
* Display structured data cleanly

---

### 📱 Responsive Design

* Fully responsive layout
* Built with Tailwind utility classes

---

<!-- ================= PROJECT NATURE ================= -->

## 🧪 Project Type

This is a **learning-focused project** aimed at strengthening frontend fundamentals.

> ⚠️ Note: This is not a full backend-powered system.
> All functionality is handled on the frontend using JavaScript and APIs.

---

<!-- ================= WHY THIS MATTERS ================= -->

## 💡 What This Project Demonstrates

Even without frameworks, this project shows:

* Strong understanding of JavaScript fundamentals
* Ability to work with APIs
* Clean UI rendering logic
* Real-world problem simulation (Issue Tracking)

---

<!-- ================= INSTALLATION ================= -->

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

---

### 📥 Clone the Repository

```bash
git clone https://github.com/ZunaedAfif10/github-issue-tracker.git
```

---

### 📂 Navigate to Project Folder

```bash
cd github-issue-tracker
```

---

### ▶️ Run the Project

Since this is a frontend-only project, you can run it directly in your browser:

#### Option 1: Open Manually

* Open `index.html` in your browser

#### Option 2: Use Live Server (Recommended)

If you're using VS Code:

1. Install the **Live Server** extension
2. Right-click on `index.html`
3. Click **"Open with Live Server"**

---

<!-- ================= PROJECT USAGE ================= -->

## 🧑‍💻 How to Use

Once the project is running:

* 📋 View issues fetched from API
* ➕ Create new issues (UI-based)
* 🔍 Search or filter issues
* ⚡ Interact with dynamic UI elements

---

<!-- ================= API DETAILS ================= -->

## 📡 API Usage

This project fetches issue data from an external API using the JavaScript `fetch()` method.

---

### 🔗 Example Implementation

```javascript
const loadAll = () => {
    loadingSpinner(true);

    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then(res => res.json())
        .then(show => {

            // Count issues only once
            if (f === 0) {
                countData(show.data);
                f = 1;
            }

            // Display issues in UI
            displayIssue(show.data);
        });
};
```

---

### 🧠 Explanation

* 📡 Fetches data from the API endpoint
* 🔄 Converts response into JSON
* 📊 Counts total issues (runs once)
* 🖥️ Dynamically renders issues in the UI

---

### ⚠️ Notes

* Uses `.then()` Promise chaining instead of async/await
* Ensures efficient rendering by avoiding repeated counting
* Depends on helper functions like:

  * `loadingSpinner()`
  * `countData()`
  * `displayIssue()`

---

<!-- ================= CONFIGURATION ================= -->

## ⚙️ Configuration

No environment variables or backend setup required.

However, you may customize:

* API endpoints inside JavaScript files
* UI styles using Tailwind classes
* DOM behavior in JS scripts

---

<!-- ================= TROUBLESHOOTING ================= -->

## 🛠️ Troubleshooting

### ❌ Data Not Loading?

* Check API URL
* Ensure internet connection
* Look for console errors

---

### ❌ UI Not Updating?

* Verify JavaScript event listeners
* Check DOM selectors

---

### ❌ CORS Issues?

* Use a public API
* Or run with Live Server

---

<!-- ================= PROJECT STRUCTURE ================= -->

## 📂 Project Structure

A clean and simple structure focused on clarity and maintainability:

```bash id="w3q9jk"
github-issue-tracker/
│── index.html        # Main HTML file
│── styles         # custom styles
│── script         # Core JavaScript logic
│── assets           # Images, icons, etc.
│── README.md
```

---

<!-- ================= FILE BREAKDOWN ================= -->

## 🧩 File Breakdown

### 📄 `index.html`

* Defines the structure of the application
* Contains placeholders for dynamic content
* Connects CSS and JavaScript files

---

### 🎨 `style.css`

* Additional styling
* Custom UI tweaks

---

### ⚡ `script`

This is the **core of the application**.

Handles:

* 📡 API fetching
* 🧠 Data processing
* 🎯 Event handling
* 🔄 DOM updates

---

<!-- ================= CODE FLOW ================= -->

## 🔄 Application Flow

Understanding how your app works step-by-step:

```text id="p1q4l9"
Load Page → Fetch API → Process Data → Render UI → Handle User Events → Update UI
```

---

### 🧠 Detailed Flow

1. Page loads in browser
2. JavaScript fetches data from API
3. Data is converted to JSON
4. UI elements are dynamically created
5. Event listeners are attached
6. User interacts → UI updates instantly

---

<!-- ================= CORE LOGIC ================= -->

## 🧠 Core JavaScript Concepts Used

### 📡 Fetching Data

* Uses the native `fetch()` API
* Handles asynchronous operations using **Promise chaining (`.then()`)**
* Converts API responses into JSON format
* Dynamically updates the UI with fetched data
* Includes basic loading state handling

---

### 🎯 Event Handling

* Click events
* Form submissions
* Dynamic interactions

---

### 🧱 DOM Manipulation

* Creating elements dynamically
* Updating content
* Removing/replacing elements

---

### 🔄 State Handling (Basic)

* Data stored in variables
* UI updates based on state changes

---

<!-- ================= DESIGN APPROACH ================= -->

## 🎨 UI Design Approach

* Utility-first styling using Tailwind CSS
* Minimal and clean interface
* Focus on usability and clarity

---

<!-- ================= LEARNING OUTCOME ================= -->

## 📚 What I Learned From This Project

This project demonstrates the ability to:

* Build a complete frontend application from scratch
* Work with real APIs
* Manage UI updates dynamically
* Write clean and structured JavaScript code

---

<!-- ================= CONTRIBUTING ================= -->

## 🤝 Contributing

Contributions are welcome and appreciated!

If you'd like to improve this project, feel free to fork the repository and submit a pull request.

---

### 🛠️ How to Contribute

1. Fork the project
2. Create your feature branch

   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes

   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch

   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request

---

### 💡 Contribution Ideas

* Improve UI/UX
* Add issue persistence (local storage or backend)
* Implement comments system
* Add dark mode 🌙
* Optimize performance

---

<!-- ================= LICENSE ================= -->

## 📄 License

This project is licensed under the **MIT License**.

You are free to:

* ✔ Use
* ✔ Modify
* ✔ Distribute

With proper attribution.

---

<!-- ================= AUTHOR ================= -->

## 👨‍💻 Author

Developed by:

**Zunaed Afif**

* 🌐 GitHub: https://github.com/ZunaedAfif10

---

<!-- ================= SUPPORT ================= -->

## ⭐ Support

If you found this project helpful:

* ⭐ Star this repository
* 🍴 Fork it
* 📢 Share it with others

---

<!-- ================= FOOTER ================= -->

## 🚀 Final Note

This project is a demonstration of **strong JavaScript fundamentals** and **real-world problem solving** using only frontend technologies.

> Built with ❤️ using HTML, Tailwind CSS, and Vanilla JavaScript

---

<p align="center">
  ⭐ Don't forget to star this repository if you like it!
</p>
