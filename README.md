# 🤖 Discord.js Advanced Bot Template

A professional, modular, and easy-to-use bot template developed by **Triggered0**. This boilerplate is designed to help you start your Discord bot project with a clean architecture and modern features.

[![Discord.js](https://img.shields.io/badge/discord.js-v14-blue.svg?logo=discord&logoColor=white)](https://discord.js.org/)
[![Node.js](https://img.shields.io/badge/node.js-%3E%3D16.11.0-green.svg?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/license-MIT-important.svg)](LICENSE)

## 🚀 Key Features

- **Modular Handlers:** Automatically loads commands, events, and interactions.
- **Interaction Support:** Specialized structure for Slash Commands, Buttons, Modals, and Select Menus.
- **Prefix Commands:** Support for traditional message-based commands.
- **Event-Driven:** Every Discord event is handled in its own dedicated file.
- **Ready-to-Use Samples:** Includes example files in the `samples/` directory for quick development.
- **Error Handling:** Built-in protection against unexpected crashes (unhandledRejection).

## 🛠️ Prerequisites

- A Discord Bot Token ([Discord Developer Portal](https://discord.com/developers/applications))
- [Node.js](https://nodejs.org/) (Version 16.11.0 or higher)
- [NPM](https://www.npmjs.com/)

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Triggered0/discordjs-bot-template.git
cd discordjs-bot-template
```
2. **Install dependencies:**
```bash
npm install
```
3. **Configure Environment:**
Rename `.env.example` to `.env` and fill in your credentials:
```env
TOKEN=YOUR_BOT_TOKEN
```


## 🚀 Getting Started

To start the bot in production mode:

```bash
node bot.js
```

If you have `nodemon` installed, you can use it for development:

```bash
npm run dev

```

## 📁 Project Structure

```text
├── commands/      # Prefix-based commands
├── events/        # Bot event listeners (ready, interactionCreate, etc.)
├── handlers/      # Core logic for loading commands and events
├── interactions/  # Slash commands, Buttons, Modals, etc.
├── samples/       # Templates for creating new commands/interactions
├── bot.js         # Main entry point
├── .env           # Environment variables (private)
├── config.json    # Config variables
└── package.json   # Dependencies and scripts

```

## 🤝 Contributing

This is a template project. Feel free to open an **Issue** for bugs or submit a **Pull Request** for new features.

## 📜 License

This project is licensed under the [MIT](https://www.google.com/search?q=LICENSE) License.
