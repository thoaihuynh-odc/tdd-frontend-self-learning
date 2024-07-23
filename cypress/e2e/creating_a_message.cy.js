describe("Creating a message", () => {
    const sendNewMessage = () => {
        cy.get('[data-testid="messageText"]').type("New message");

        cy.get('[data-testid="sendButton"]').click();
    };

    beforeEach(() => {
        cy.visit("http://localhost:3000");

        cy.get('[data-testid="messageText"]').type(" abc");

        cy.get('[data-testid="sendButton"]').click();
    });

    it("Displays the message in the list", () => {
        sendNewMessage();

        cy.get('[data-testid="messageText"]').should("have.value", "");

        cy.contains("New message");

        cy.get('[data-testid="messageList"]')
            .children()
            .should("have.length", 2);
    });

    it("Does not send an empty message", () => {
        cy.get('[data-testid="messageText"]').type(" ");

        cy.get('[data-testid="sendButton"]').click();

        cy.get('[data-testid="messageList"]')
            .children()
            .should("have.length", 1);
    });

    it("Clears the message list", () => {
        sendNewMessage();

        cy.get('[data-testid="deleteAllButton"]').click();

        cy.get('[data-testid="messageList"]')
            .children()
            .should("have.length", 0);
    });

    it("Clears the first item from the list", () => {
        cy.get('[data-testid="messageItem-0"]').contains("abc");

        sendNewMessage();

        cy.get('[data-testid="deleteButton-0"]').click();

        cy.get('[data-testid="messageList"]')
            .children()
            .should("have.length", 1);
    });
});
