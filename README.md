# Tab Time Tracker

# Author - Rounak Hati/mimo-to

## **Description**

Tab Time Tracker is a **Google Chrome extension** designed to help users **track the time spent on each browser tab**. This extension allows users to monitor their browsing habits, optimize their workflow, and increase productivity by gaining insights into how much time they dedicate to various websites.

## **Motivation & Problem Solved**

In today’s digital world, people often lose track of time while browsing the internet. Whether it's for work, study, or leisure, individuals spend countless hours online without realizing where their time is going. This project was created to:

- **Increase awareness of browsing habits**
- **Help users manage screen time efficiently**
- **Provide insights into productivity and time management**

## **Key Features**

✅ Tracks time spent on each active tab
✅ Provides a **real-time floating timer** on websites
✅ Stores session data using Chrome's local storage
✅ Simple **popup dashboard** to view time logs
✅ Allows users to reset time logs when needed
✅ Works on **all websites** without requiring additional setup

## **Technical Overview**

### **Files and Their Functions**

- **`manifest.json`** - Defines extension settings, permissions, and background scripts
- **`background.js`** - Tracks tab activity, updates storage, and manages timers
- **`content.js`** - Injects a floating timer into active web pages
- **`popup.html`** - Provides the user interface for viewing time logs
- **`popup.js`** - Handles UI updates, displays time statistics, and resets logs
- **`style.css`** - Adds styling for the popup and floating timer
- **`icon.png`** - Custom icon for the extension

### **How It Works**

1. **Tracking Tab Activity**
   - When a user switches to a new tab, the extension starts tracking time for that specific tab.
   - If the user switches away, the timer stops for the previous tab and begins for the new one.

2. **Floating Timer on Web Pages**
   - A small timer appears on the corner of web pages, allowing users to see real-time tracking.
   - The timer updates dynamically and disappears when inactive.

3. **Popup Dashboard**
   - Users can open the popup to view a **list of tracked websites** and their respective time logs.
   - A reset button allows clearing the history.

### **Why These Design Choices?**

- **Manifest v3 Compliance:** Ensures the extension follows Google Chrome’s latest security policies.
- **Local Storage Instead of Database:** Keeps the extension lightweight and independent.
- **Floating Timer:** Provides instant feedback without requiring the user to check the popup.
- **Minimalist UI:** Avoids clutter and keeps the focus on time tracking.

## **Installation & Usage**

### **Installing the Extension Locally**

1. Download the project files and **extract the folder**.
2. Open **Google Chrome** and go to: `chrome://extensions/`
3. Enable **Developer Mode** (top-right corner).
4. Click **"Load unpacked"** and select the project folder.
5. The **Tab Time Tracker** extension will appear in your Chrome toolbar.

### **Using the Extension**

- Click the **Tab Time Tracker** icon to open the popup and view tracked time.
- The floating timer will appear automatically when browsing.
- Press **"Reset Timer"** in the popup to clear data.

## **Future Improvements**

🚀 **Detailed Analytics:** Pie charts for visual representation of browsing time.
🚀 **Export Data:** Allow users to download browsing time history.
🚀 **Customizable Timer UI:** Change position, color, or disable floating timer.

## **Conclusion**

Tab Time Tracker is a simple but powerful Chrome extension that helps users **understand and optimize their online habits**. By providing real-time tracking and a clean UI, it encourages better productivity and time management.

---

