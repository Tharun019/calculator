document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
  
    let expression = "";
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
  
        // Clear
        if (button.id === "clear") {
          expression = "";
          display.value = "";
          return;
        }
  
        // Equals
        if (button.id === "equals") {
          try {
            const result = eval(expression);
            display.value = result;
            expression = result.toString(); // allow chaining
          } catch {
            display.value = "Error";
            expression = "";
          }
          return;
        }
  
        // Operators & numbers
        expression += value;
        display.value = expression;
      });
    });
  });
  