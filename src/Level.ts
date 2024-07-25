// src/levels.ts

export interface Level {
    id: number;
    letters: string;
    maxWords: number;
    words: string[];
}

export const levels: Level[] = [
    { id: 1, letters: "NEW", maxWords: 2, words: ["NEW", "WE"] },
    { id: 2, letters: "APM", maxWords: 2, words: ["MAP", "AM", "AMP", "MA", "PA", "PAM"] },
    { id: 3, letters: "ORF", maxWords: 3, words: ["FOR", "OF", "OR", "FRO"] },
    { id: 4, letters: "OWN", maxWords: 4, words: ["NOW", "ON", "NO", "WON", "OWN", "OW"] },
    { id: 5, letters: "ITH", maxWords: 3, words: ["HIT", "IT", "HI", "TI"] },
    { id: 6, letters: "OGD", maxWords: 4, words: ["GOD", "DO", "GO", "DOG", "OD"] },
    { id: 7, letters: "OPT", maxWords: 3, words: ["TOP", "TO", "POT", "OPT", "PO", "OP"] },
    { id: 8, letters: "TEA", maxWords: 4, words: ["EAT", "AT", "TEA", "ATE", "TE", "AE", "ETA"] },
    { id: 9, letters: "ETM", maxWords: 2, words: ["MET", "ME", "EM", "TE"] },
    { id: 10, letters: "UTB", maxWords: 2, words: ["TUB", "BUT", "UT"] },
];
