describe("Rock Paper Scissors game", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Player1's turn", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("Player1 can choose rock", () => {
      cy.get("[data-cy='player1-rock']").click();
      cy.get("[data-cy='player1-go']").click();
    });

    it("Player1 can choose paper", () => {
      cy.get("[data-cy='player1-paper']").click();
      cy.get("[data-cy='player1-go']").click();
    });

    it("Player1 can choose scissors", () => {
      cy.get("[data-cy='player1-scissors']").click();
      cy.get("[data-cy='player1-go']").click();
    });

    it("Hides player1's board", () => {
      cy.get("[data-cy='player1-rock']").click();
      cy.get("[data-cy='player1-go']").click();
      cy.get("[data-cy='player1-board']").should("not.be.visible");
    });

    it("Displays player2's board", () => {
      cy.get("[data-cy='player1-rock']").click();
      cy.get("[data-cy='player1-go']").click();
      cy.get("[data-cy='player2-board']").should("be.visible");
    });
  });

  describe("Player2's turn", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.get("[data-cy='player1-rock']").click();
      cy.get("[data-cy='player1-go']").click();
    });
    it("Player2 can choose rock", () => {
      cy.get("[data-cy='player2-rock']").click();
      cy.get("[data-cy='player2-go']").click();
    });

    it("Player2 can choose paper", () => {
      cy.get("[data-cy='player2-paper']").click();
      cy.get("[data-cy='player2-go']").click();
    });

    it("Player2 can choose scissors", () => {
      cy.get("[data-cy='player2-scissors']").click();
      cy.get("[data-cy='player2-go']").click();
    });

    it("Redisplays player1's board", () => {
      cy.get("[data-cy='player2-paper']").click();
      cy.get("[data-cy='player2-go']").click();
      cy.get("[data-cy='player1-board']").should("be.visible");
    });
  });

  describe("Users can see the result of the game", () => {
    beforeEach(() => {
      cy.get("[data-cy='player1-rock']").click();
      cy.get("[data-cy='player1-go']").click();
      cy.get("[data-cy='player2-paper']").click();
      cy.get("[data-cy='player2-go']").click();
    });

    it("Displays a result message", () => {
      cy.get("[data-cy='result-message']").should("contain", "Player 2 won!");
    });
  });

  describe("Users can reset the game", () => {
    beforeEach(() => {
      cy.get("[data-cy='player1-rock']").click();
      cy.get("[data-cy='player1-go']").click();
      cy.get("[data-cy='player2-paper']").click();
      cy.get("[data-cy='player2-go']").click();
    });

    it("Displays Play Again button", () => {
      cy.get("[data-cy='play-again']").should("be.visible");
    });

    it("Resets the game board", () => {
      cy.get("[data-cy='play-again']").click();
      cy.get("[data-cy='result-message']").should("be.empty");
    });
  });
});
