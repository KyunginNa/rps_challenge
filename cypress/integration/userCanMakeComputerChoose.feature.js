describe("Random pick", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Player1 makes computer choose", () => {
    it("makes player1's board invisible", () => {
      cy.get("button#player1-random").click();
      cy.get("#player1-board").should("not.be.visible");
    });
    it("displays what computer chose after player2 picked", () => {
      cy.get("button#player1-random").click();
      cy.get("button#player2-scissors").click();
      cy.get("button#player2-go").click();
      cy.get("#player-random-result").should("be.visible");
    });
  });

  describe("Player2 makes computer choose", () => {
    beforeEach(() => {
      cy.get("button#player-rock").click();
      cy.get("button#player-go").click();
      cy.get("button#player2-random").click();
    });
    it("displays what computer chose", () => {
      cy.get("#player2-random-result").should("be.visible");
    });
    it("displays a result message", () => {
      cy.get("#result-message").should("be.visible")
    });
    it("displays Play Again button", () => {
      cy.get("button#play-again").should("be.visible")
    });
    it("displays Start A New Game button", () => {
      cy.get("button#restart").should("be.visible")
    });
  });
});
