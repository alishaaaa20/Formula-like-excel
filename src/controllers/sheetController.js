// src/controllers/sheetController.js

const math = require("mathjs");

// Function to evaluate a formula expression
function evaluateFormula(expression, data) {
  try {
    // Replace variables with their values in the expression
    const evaluatedExpression = Object.keys(data).reduce((expr, variable) => {
      const regex = new RegExp(variable, "g");
      return expr.replace(regex, data[variable]);
    }, expression);

    // Using math.js to evaluate the expression
    const result = math.evaluate(evaluatedExpression);
    return result;
  } catch (error) {
    throw error;
  }
}

// Example controller function to handle sheet-related actions
function handleSheetAction(req, res) {
  // Extract data from request body
  const { row, cell1, cell2, cell3, formulaName, userData } = req.body;

  // Example data object
  const data = { cell1, cell2, cell3 };

  async function handleSheetAction(req, res) {
    // Extract data from request body
    const { row, cell1, cell2, cell3, formulaName, userData } = req.body;

    // Example data object
    const data = { cell1, cell2, cell3 };

    try {
      // Evaluate the formula using the controller function
      const formulaResult = evaluateFormula(userData[formulaName], data);

      // Insert data into the PostgreSQL database (You may need to adapt this based on your database structure)
      // For simplicity, this example assumes the existence of a "sheet_data" table with columns "row", "cell1", "cell2", "cell3", "formula_result"
      await client.query(
        "INSERT INTO sheet_data(row, cell1, cell2, cell3, formula_result) VALUES($1, $2, $3, $4, $5)",
        [row, cell1, cell2, cell3, formulaResult]
      );

      res.json({ message: "Data inserted successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error handling sheet action." });
    }
  }
  console.error(error);
  res.status(500).json({ error: "Error handling sheet action." });
}

module.exports = {
  handleSheetAction,
};
