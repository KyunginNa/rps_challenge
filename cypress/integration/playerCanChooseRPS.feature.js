describe("Rock Paper Scissors Game board", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("Player can choose among rock/paper/scissors", () => {
        cy.get("button#rock").click()
        cy.get("button#paper").click()
        cy.get("button#scissors").click()
    })

 })