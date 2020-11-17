describe("RPS interface", () => {
    it("successfully renders", () => {
        cy.visit("http://localhost:3000")
        cy.get("#header").should("contain", "Rock Paper Scissors")
        cy.get("#footer").should("contain", "Version 1.0")
        cy.get("#player-header").should("contain", "Player")
        cy.get("#computer-header").should("contain", "Computer")
    })
})