import React from 'react'

export const Match = () => {
    var matchYear = 2026
    var cyear = 2026
    var score = 720

  return (
    <div style={{textAlign:"center",backgroundColor:score<500 && "red"}}>
        <h1>MATCH</h1>
        <h1>Match Year = {matchYear} {matchYear==cyear ? "current Year":""}</h1>
        <h1>Match Year = {matchYear} {matchYear==cyear && "current year"}</h1>
        <h1 style={{color:matchYear==cyear?"green":"red"}}>Match Year = {matchYear}</h1>
        <h1 style={{color:score>=500 ? "blue":"pink"}}>Score : {score}</h1>
    </div>
  )
}
