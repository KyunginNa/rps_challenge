describe("RPS interface", () => {
    it("successfully renders", () => {
        cy.visit("http://localhost:3000")
        cy.get("#header").should("contain", "Rock Paper Scissors")
        cy.get("#footer").should("contain", "Version 3.0")
        cy.get("#player-header").should("contain", "Player 1")
        cy.get("#player2-header").should("contain", "Player 2")
    })
})