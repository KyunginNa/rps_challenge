describe("Rock Paper Scissors game", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Player1's turn", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("Player1 can choose rock", () => {
      cy.get("button#player-rock").click();
      cy.get("button#player-go").click();
    });

    it("Player1 can choose paper", () => {
      cy.get("button#player-paper").click();
      cy.get("button#player-go").click();
    });

    it("Player1 can choose scissors", () => {
      cy.get("button#player-scissors").click();
      cy.get("button#player-go").click();
    });

    it("Hides player1's board", () => {
      cy.get("button#player-rock").click();
      cy.get("button#player-go").click();
      cy.get("#player1-board").should("not.be.visible");
    });

    it("Displays player2's board", () => {
      cy.get("button#player-rock").click();
      cy.get("button#player-go").click();
      cy.get("#player2-board").should("be.visible");
    });
  });

  describe("Player2's turn", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("button#player-rock").click();
      cy.get("button#player-go").click();
    });
    it("Player2 can choose rock", () => {
      cy.get("button#player2-rock").click();
      cy.get("button#player2-go").click();
    });

    it("Player2 can choose paper", () => {
      cy.get("button#player2-paper").click();
      cy.get("button#player2-go").click();
    });

    it("Player2 can choose scissors", () => {
      cy.get("button#player2-scissors").click();
      cy.get("button#player2-go").click();
    });

    it("Redisplays player1's board", () => {
      cy.get("button#player2-rock").click();
      cy.get("button#player2-go").click();
      cy.get("#player1-board").should("be.visible");
    });
  });

  describe("Users can see the result of the game", () => {
    beforeEach(() => {
      cy.get("button#player-rock").click();
      cy.get("button#player-go").click();
      cy.get("button#player2-paper").click();
      cy.get("button#player2-go").click();
    });

    it("Displays a result message", () => {
      cy.get("#result-message").should("contain", "Player 2 won!");
    });
  });

  describe("Users can reset the game", () => {
    beforeEach(() => {
      cy.get("button#player-rock").click();
      cy.get("button#player-go").click();
      cy.get("button#player2-paper").click();
      cy.get("button#player2-go").click();
    });

    it("Displays Play Again button", () => {
      cy.get("#play-again").should("be.visible");
    });

    it("Resets the game board", () => {
      cy.get("button#play-again").click();
      cy.get("#result-message").should("be.empty");
    });
  });
});
