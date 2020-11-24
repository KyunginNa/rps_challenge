describe("The current score", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays 0:0 at default", () => {
    cy.get("#current-score").should("contain", "0:0");
  });

  describe("When player1 wins", () => {
    beforeEach(() => {
      cy.get("button#player-paper").click();
      cy.get("button#player-go").click();
      cy.get("button#player2-rock").click();
      cy.get("button#player2-go").click();
    });
    it("adds up player 1's score", () => {
      cy.get("#current-score").should("contain", "1:0");
    });
  });

  describe("When player2 wins", () => {
    beforeEach(() => {
      cy.get("button#player-rock").click();
      cy.get("button#player-go").click();
      cy.get("button#player2-paper").click();
      cy.get("button#player2-go").click();
    });
    it("adds up player 2's score", () => {
      cy.get("#current-score").should("contain", "0:1");
    });
  });

  describe("When players draw", () => {
    beforeEach(() => {
      cy.get("button#player-paper").click();
      cy.get("button#player-go").click();
      cy.get("button#player2-paper").click();
      cy.get("button#player2-go").click();
    });
    it("should not add up the score", () => {
      cy.get("#current-score").should("contain", "0:0");
    });
  });

  describe("When players start a new game", () => {
    beforeEach(() => {
      cy.get("button#player-rock").click();
      cy.get("button#player-go").click();
      cy.get("button#player2-paper").click();
      cy.get("button#player2-go").click();
      cy.get("button#restart").click();
    });
    it("should reset the score", () => {
      cy.get("#current-score").should("contain", "0:0");
    });
  });
});
