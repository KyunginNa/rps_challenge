import React from "react"
import { useSelector } from "react-redux"
import { Statistic } from "semantic-ui-react"

const Score = () => {
  const playerOneScore = useSelector(state => state.playerOneScore)
  const playerTwoScore = useSelector(state => state.playerTwoScore)
  return (
    <Statistic id="current-score" color="teal" inverted>
      <Statistic.Label style={{ fontFamily: "monospace", fontSize: 16 }}>
        Score
      </Statistic.Label>
      <Statistic.Value style={{ fontFamily: "monospace" }}>
        {playerOneScore}:{playerTwoScore}
      </Statistic.Value>
    </Statistic>
  )
}

export default Score