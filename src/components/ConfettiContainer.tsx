import Confetti from "react-confetti"
import type { JSX } from "react/jsx-runtime"

/*
CHALLENGE: Explictly type the ConfettiContainer component's return value
*/

export default function ConfettiContainer({ isGameWon }: { isGameWon: boolean }): null | JSX.Element {
    if (!isGameWon) {
        return null
    }
    else {
        return (
            <Confetti
                recycle={false}
                numberOfPieces={1000}
            />
        )
    }

}