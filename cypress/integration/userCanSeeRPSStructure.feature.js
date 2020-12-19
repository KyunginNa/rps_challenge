describe("RPS interface", () => {
  it("successfully renders", () => {
    cy.visit("/");
    cy.get("[data-cy='header']").should("contain", "Rock Paper Scissors");
    cy.get("[data-cy='footer']").should("contain", "Version 3.0");
    cy.get("[data-cy='player-header']").should("contain", "Player 1");
    cy.get("[data-cy='player2-header']").should("contain", "Player 2");
  });
});
