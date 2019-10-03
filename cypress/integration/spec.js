describe("Sapper template app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has the correct <h1>", () => {
    cy.contains("h1", "Great success!");
  });

  it("navigates to /about", () => {
    cy.get("nav a")
      .contains("about")
      .click();
    cy.url().should("include", "/about");
  });

  it("navigates to /posts", () => {
    cy.get("nav a")
      .contains("posts")
      .click();
    cy.url().should("include", "/posts");
  });
});
