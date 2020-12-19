describe("The current score", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays 0:0 at default", () => {
    cy.get("[data-cy='current-score']").should("contain", "0:0");
  });

  describe("When player1 wins", () => {
    beforeEach(() => {
      cy.get("[data-cy='player1-paper']").click();
      cy.get("[data-cy='player1-go']").click();
      cy.get("[data-cy='player2-rock']").click();
      cy.get("[data-cy='player2-go']").click();
    });
    it("adds up player 1's score", () => {
      cy.get("[data-cy='current-score']").should("contain", "1:0");
    });
  });

  describe("When player2 wins", () => {
    beforeEach(() => {
      cy.get("[data-cy='player1-rock']").click();
      cy.get("[data-cy='player1-go']").click();
      cy.get("[data-cy='player2-paper']").click();
      cy.get("[data-cy='player2-go']").click();
    });
    it("adds up player 2's score", () => {
      cy.get("[data-cy='current-score']").should("contain", "0:1");
    });
  });

  describe("When players draw", () => {
    beforeEach(() => {
      cy.get("[data-cy='player1-paper']").click();
      cy.get("[data-cy='player1-go']").click();
      cy.get("[data-cy='player2-paper']").click();
      cy.get("[data-cy='player2-go']").click();
    });
    it("should not add up the score", () => {
      cy.get("[data-cy='current-score']").should("contain", "0:0");
    });
  });

  describe("When players start a new game", () => {
    beforeEach(() => {
      cy.get("[data-cy='player1-rock']").click();
      cy.get("[data-cy='player1-go']").click();
      cy.get("[data-cy='player2-paper']").click();
      cy.get("[data-cy='player2-go']").click();
      cy.get("[data-cy='restart']").click();
    });
    it("should reset the score", () => {
      cy.get("[data-cy='current-score']").should("contain", "0:0");
    });
  });
});
