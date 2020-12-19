describe("Random pick", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Player1 makes computer choose", () => {
    it("makes player1's board invisible", () => {
      cy.get("[data-cy='player1-random']").click();
      cy.get("[data-cy='player1-board']").should("not.be.visible");
    });
  });

  describe("Player2 makes computer choose", () => {
    beforeEach(() => {
      cy.get("[data-cy='player1-rock']").click();
      cy.get("[data-cy='player1-go']").click();
      cy.get("[data-cy='player2-random']").click();
    });
    it("displays player1's board again", () => {
      cy.get("[data-cy='player1-board']").should("be.visible");
    });
    it("displays a result message", () => {
      cy.get("[data-cy='result-message']").should("not.be.empty");
    });
    it("displays Play Again button", () => {
      cy.get("[data-cy='play-again']").should("be.visible");
    });
    it("displays Start A New Game button", () => {
      cy.get("[data-cy='restart']").should("be.visible");
    });
  });
});
