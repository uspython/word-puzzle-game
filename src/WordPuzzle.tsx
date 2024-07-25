import React, { useState, useEffect } from 'react';
import { levels, Level } from './Level';
import './WordPuzzle.css';

interface CharacterCardProps {
    letter: string;
    onDragStart: (e: React.DragEvent<HTMLDivElement>, letter: string) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ letter, onDragStart }) => (
    <div
        className="character-card"
        draggable
        onDragStart={(e) => onDragStart(e, letter)}
    >
        {letter}
    </div>
);


const WordPuzzle: React.FC = () => {
    const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
    const [currentLevelLetters, setCurrentLevelLetters] = useState<string>('');
    const [input, setInput] = useState<string>('');
    const [score, setScore] = useState<number>(0);
    const [foundWords, setFoundWords] = useState<string[]>([]);

    const currentLevel = levels[currentLevelIndex];

    useEffect(() => {
        shuffleLetters();
    }, [currentLevelIndex]);

    const shuffleLetters = () => {
        const shuffled = currentLevel.letters.split('').sort(() => Math.random() - 0.5).join('');
        setCurrentLevelLetters(shuffled);
    };

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, letter: string) => {
        e.dataTransfer.setData('text/plain', letter);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const letter = e.dataTransfer.getData('text/plain');
        setInput(prev => prev + letter);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const checkWord = () => {
        if (currentLevel.words.includes(input) && !foundWords.includes(input)) {
            setScore(prev => prev + input.length);
            setFoundWords(prev => [...prev, input]);
            setInput('');

            if (foundWords.length + 1 === currentLevel.maxWords) {
                // Move to next level
                if (currentLevelIndex < levels.length - 1) {
                    setCurrentLevelIndex(prev => prev + 1);
                    setFoundWords([]);
                } else {
                    alert("Congratulations! You've completed all levels!");
                }
            }
        } else {
            alert("Not a valid word or already found!");
        }
    };

    const clearInput = () => {
        setInput('');
    };

    const removeLastLetter = () => {
        setInput(prev => prev.slice(0, -1));
    };

    return (
        <div className="word-puzzle">
            <h1>Word Puzzle Game</h1>
            <div className="game-info">
                <p>Level: {currentLevelIndex + 1}</p>
                <p>Score: {score}</p>
                <p>Found Words: {foundWords.join(', ')}</p>
            </div>
            <div className="puzzle-area">
                <div
                    className="word-display"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                >
                    {input}
                </div>
                <div className="character-panel">
                    {currentLevelLetters.split('').map((letter, index) => (
                        <CharacterCard
                            key={index}
                            letter={letter}
                            onDragStart={handleDragStart}
                        />
                    ))}
                </div>
            </div>
            <div className="game-controls">
                <button onClick={checkWord}>Submit Word</button>
                <button onClick={clearInput}>Clear</button>
                <button onClick={removeLastLetter}>Remove Last Letter</button>
                <button onClick={shuffleLetters}>Shuffle Letters</button>
            </div>
        </div>
    );
};

export default WordPuzzle;
