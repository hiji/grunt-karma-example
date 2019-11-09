describe("appendLi test", () => {
    it("append li element after click", () => {
        document.body.innerHTML = __html__['html/target.html'];

        const button = document.getElementById("button");
        const ul = document.getElementById("ul")

        expect(ul.childElementCount).toBe(0)

        button.click();
        expect(ul.childElementCount).toBe(1)

        button.click();
        expect(ul.childElementCount).toBe(2)
    });
});