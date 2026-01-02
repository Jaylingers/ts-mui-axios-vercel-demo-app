/// <reference types="cypress" />

describe("User Search", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("should filter users when typing in search input", () => {
        // Use data-testid to locate the input reliably
        cy.get('[data-testid="search-input"]')
            .type("Leanne", {delay: 500}); // slower typing for visibility

        // Wait 1 second to clearly see the table update
        cy.wait(3000)

        // Table should only display users matching search
        cy.get("table tbody tr").each(($row) => {
            cy.wrap($row).contains(/Leanne/i);
        });
    });

    it("should show no results if search does not match", () => {
        cy.get('[data-testid="search-input"]')
            .type("NonExistingName", {delay: 300}); // slower typing for visibility

        // Wait 1 second to clearly see the table update
        cy.wait(3000);


        cy.get("table tbody tr").should("have.length", 0);
    });
});
