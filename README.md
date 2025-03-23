# Number Memory Game

A challenging number memory game where players need to memorize and recall numbers of increasing length. Test your memory and see how many digits you can remember!

## Features

- Progressive difficulty with increasing number length
- Time-based scoring system
- Modern and responsive UI
- Keyboard support (Enter key to validate)
- Score tracking
- Game over and restart functionality

## How to Play

1. Click "Start Game" to begin
2. A number will appear on the screen for 3 seconds
3. After the number disappears, enter the number you remember
4. Press Enter or click "Validate" to submit your answer
5. If correct, you'll advance to the next level with a longer number
6. If incorrect or time runs out, the game ends
7. Your score is based on the level reached and time remaining

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Running Locally

```bash
npm run dev
```

The game will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration and deploy your site

## Technologies Used

- React
- TypeScript
- Vite
- CSS3
