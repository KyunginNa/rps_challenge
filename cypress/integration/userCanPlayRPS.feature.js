describe("User can play Rock Paper Scissors", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("User can pick one from rock/paper/scissors", () => {
    cy.get("button#player-rock").click();
    cy.get("button#player-paper").click();
    cy.get("button#player-scissors").click();
    cy.get("button#player-go").click();
  });

  describe("User can see the result of the game", () => {
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
      cy.get("button#play-again").should("be.visible");
    });
  });
});
