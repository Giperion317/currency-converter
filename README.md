# 💱 Currency Converter

A responsive and user-friendly currency converter built with **React**, **TypeScript**, and **Tailwind CSS**. It fetches real-time exchange rates and allows filtering between top world currencies and cryptocurrencies.

🔗 [RateShift](https://rateshift.netlify.app/)  
🔗 [GitHub](https://github.com/Giperion317/currency-converter)

## 🚀 Features

- 🌍 Convert between 150+ fiat and crypto currencies
- ✅ Filter options for:
  - Top currencies (USD, EUR, GBP, etc.)
  - Popular cryptocurrencies (BTC, ETH, SOL, etc.)
- 🔄 Real-time exchange rates via REST API
- ⚡ Instant conversion with loading state handling
- 🧠 Optimized performance using `useMemo`
- 💡 Clean and modern UI with full responsiveness

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Custom React Hooks (`useCurrencyRate`, `useFilteredCurrencies`)
- Public API for exchange rates (e.g. [Exchangerate.host](https://exchangerate.host/) or similar)

## 📸 Screenshots

| Light Theme                          | Filter Example                              |
| ------------------------------------ | ------------------------------------------- |
| ![Main View](./screenshots/main.png) | ![Filter Options](./screenshots/filter.png) |

## 📦 Installation

```bash
git clone https://github.com/yourusername/currency-converter.git
cd currency-converter
npm install
npm run dev
```

## 📁 Folder Structure

src/
├── components/
│ ├── AmountInput.tsx
│ ├── ConvertButton.tsx
│ ├── CurrencySelect.tsx
│ ├── CurrencyFilter.tsx
│ └── Result.tsx
├── helpers/
│ ├── useCurrencyRate.ts
│ ├── getCurrencyList.ts
│ ├── flagCurrencies.ts
│ └── useFilteredCurrencies.ts
├── Converter.tsx
└── App.tsx

## 🧩 Planned Improvements

- 🌐 Multilingual support (EN/DE/UA)
- 🗂 History of conversions
- 💾 Offline support with local caching
- 📲 PWA version for mobile devices

## 📄 License

MIT License

👨‍💻 Author
Anatolii Pysmennyi — **[GitHub](https://github.com/Giperion317)** | **[LinkedIn](www.linkedin.com/in/anatolii-pysmennyi)**
