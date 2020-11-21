describe("Users can play Rock Paper Scissors", () => {
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
      cy.get("button#player-go").click();
      cy.get("#player2-board").should("be.visible");
    });
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
      cy.get("button#player-go").click();
      cy.get("#player2-board").should("be.visible");
    });
  });

  describe("Users can see the result of the game", () => {
    beforeEach(() => {
      cy.get("button#player-rock").click();
      cy.get("button#player-go").click();
    });

    it("Displays what computer chose", () => {
      cy.get("#computer-pick").should("be.visible");
    });

    it("Displays a result message", () => {
      cy.get("#result-message").should("not.be.empty");
    });

    it("Displays Play Again button", () => {
      cy.get("#play-again").should("be.visible");
    });

    it("User can reset the game", () => {
      cy.get("button#play-again").click();
      cy.get("#result-message").should("be.empty");
    });
  });
});
