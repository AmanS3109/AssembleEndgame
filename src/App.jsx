import { useState } from "react"
import { languages } from "./languages"


export default function AssemblyEndgame() {

  const [currentWord, setCurrentWord] = useState("react")

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const languageElements = languages.map(lang => {
      const styles = {
          backgroundColor: lang.backgroundColor,
          color: lang.color
      }
      return (
          <span
              className="chip"
              style={styles}
              key={lang.name}
          >
              {lang.name}
          </span>
      )
  })
  
  const letterElements = currentWord.split("").map((letter, index) => (
      <span key = {index}>{letter.toUpperCase()}</span>
  ))
  console.log(letterElements)

  return (
      <main>
          <header>
              <h1>Assembly: Endgame</h1>
              <p>Guess the word within 8 attempts to keep the
              programming world safe from Assembly!</p>
          </header>
          <section className="game-status">
              <h2>You win!</h2>
              <p>Well done! 🎉</p>
          </section>
          <section className="language-chips">
              {languageElements}
          </section>
          <section className="word">
              {letterElements}
          </section>
      </main>
  )
}

