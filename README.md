# 💱 Currency Converter

A simple and responsive Currency Converter web application built using **HTML, CSS, and JavaScript**. The application allows users to convert an amount from one currency to another using real-time exchange rates fetched from a public Currency API.

## 🚀 Features

- Convert one currency to another in real time.
- Supports multiple international currencies.
- Automatically updates country flags based on the selected currencies.
- Input validation for invalid or empty amounts.
- Clean and responsive user interface.
- Fetches live exchange rates using Fetch API.

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- Currency API
- Flags API

## 📂 Project Structure

```
Currency-Converter/
│── index.html
│── style.css
│── project.js
│── codes.js        # Country and currency code mappings
│── README.md
```

## ⚙️ How It Works

1. User enters the amount to convert.
2. Selects the source currency.
3. Selects the destination currency.
4. Clicks the **Get Exchange Rate** button.
5. The application sends a request to the Currency API.
6. The exchange rate is fetched and displayed.
7. Country flags change automatically according to the selected currencies.

## 🌐 APIs Used

### Currency API

Used to fetch real-time exchange rates.

```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/
```

### Flags API

Used to display country flags.

```
https://flagsapi.com/
```

## ▶️ How to Run

1. Clone the repository.

```bash
git clone https://github.com/your-username/currency-converter.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

No additional installation is required.

## 📌 Future Improvements

- Reverse currency conversion button (Swap).
- Conversion history.
- Dark mode.
- Searchable currency dropdown.
- Display last updated exchange rate time.
- Support for cryptocurrency conversion.

## 👩‍💻 Author

**Mansi Patil**

B.Tech Computer Engineering (CSE)

Vishwakarma University, Pune

GitHub: https://github.com/your-username

---

⭐ If you found this project useful, consider giving it a star!
