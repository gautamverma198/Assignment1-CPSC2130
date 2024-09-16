const aboutPage = document.getElementById("aboutPage");
aboutPage.addEventListener('click',()=>{
    alert("Page not build Yet, Pleae try again Later")
})

const contactPage = document.getElementById("contactPage");
contactPage.addEventListener('click',()=>{
    alert("Page not build Yet, Pleae try again Later")
})

const startButton = document.getElementById("quickstart");
const containerQueries = document.getElementById("container-queries");
startButton.addEventListener("click", () => {
  if (containerQueries.style.display == "flex") {
    containerQueries.style.display = "none";
  } else {
    containerQueries.style.display = "flex";
  }
});

const queryBoxes = document.querySelectorAll(".query-box");
const description = document.getElementById("description");
const video = document.getElementById("video");

queryBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    queryBoxes.forEach((b) => b.classList.remove("active"));
    box.classList.add("active");

    const type = box.getAttribute("data-type");
    switch (type) {
      case "selection":
        description.textContent =
          "A selection query in SQL is used to retrieve specific data from a database by specifying criteria that the desired records must meet. This is typically achieved using the SELECT statement, which allows users to choose particular columns from one or more tables. By incorporating conditions with the WHERE clause, users can filter the results to match their needs. For example, a query like SELECT name, age FROM employees WHERE department = 'Sales' would return the names and ages of employees who work in the Sales department. Selection queries are fundamental for extracting relevant information from a database and are a core component of database management and analysis.";
        video.innerHTML =
          '<iframe src="https://www.youtube.com/embed/NoA_HFWxy0s"></iframe>';
        break;
      case "projection":
        description.textContent =
          "A projection query in SQL focuses on retrieving specific columns from a table, effectively selecting a subset of data fields. This is achieved using the SELECT statement, which allows users to specify the exact columns they want to include in the result set. For example, the query SELECT first_name, last_name FROM employees retrieves only the first and last names of employees, ignoring other columns in the table. Projection queries are essential for simplifying data retrieval, improving performance, and ensuring that only relevant information is presented.";
        video.innerHTML =
          '<iframe src="https://www.youtube.com/embed/cESTXgfuI-8" ></iframe>';
        break;
      case "join":
        description.textContent =
          "A join query in SQL is used to combine rows from two or more tables based on a related column between them. This allows users to retrieve a comprehensive dataset that spans multiple tables, reflecting the relationships defined in the database. Common types of joins include INNER JOIN, which returns rows with matching values in both tables; LEFT JOIN, which returns all rows from the left table and matching rows from the right table; and RIGHT JOIN, which does the reverse. For example, the query SELECT orders.order_id, customers.customer_name FROM orders INNER JOIN customers ON orders.customer_id = customers.customer_id merges order details with customer names, showing only those records where there is a match in both tables. Join queries are pivotal for integrating and analyzing data across different tables effectively.";
        video.innerHTML =
          '<iframe src="https://www.youtube.com/embed/0OQJDd3QqQM" ></iframe>';
        break;
      case "aggregation":
        description.textContent =
          "An aggregation query in SQL is used to summarize and analyze data by performing calculations across multiple rows of a table. This is achieved using aggregate functions such as COUNT(), SUM(), AVG(), MAX(), and MIN(), which operate on sets of values and return a single result. For instance, the query SELECT department, COUNT(*) FROM employees GROUP BY department counts the number of employees in each department, grouping the results by the department column. Aggregation queries are essential for generating reports, performing statistical analysis, and gaining insights from large datasets by condensing and summarizing information.";
        video.innerHTML =
          '<iframe src="https://www.youtube.com/embed/YE_7kchsqbA" ></iframe>';
        break;
      case "deletion":
        description.textContent = "A deletion query in SQL is used to remove one or more rows from a table based on specified criteria. This is typically done using the DELETE statement, which allows users to target specific records for removal. For example, the query DELETE FROM employees WHERE hire_date < '2020-01-01' deletes all employee records where the hire date is before January 1, 2020. Deletion queries are crucial for maintaining data accuracy and relevance by eliminating outdated or unnecessary information, but they should be used with caution to prevent unintentional data loss.";
        video.innerHTML =
          '<iframe src="https://www.youtube.com/embed/tpnpXSRssQQ" ></iframe>';
        break;
      case "updation":
        description.textContent =
          "An updation query in SQL is used to modify existing records in a table. This is accomplished using the UPDATE statement, which allows users to change the values of one or more columns for rows that meet specific criteria. For example, the query UPDATE employees SET salary = salary * 1.10 WHERE department = 'Marketing' increases the salary of all employees in the Marketing department by 10%. Update queries are essential for maintaining accurate and current data, reflecting changes in business conditions or correcting errors in the database. However, they should be used carefully to avoid unintended modifications.";
        video.innerHTML =
          '<iframe src="https://www.youtube.com/embed/Sh3r8VaBdf4" ></iframe>';
        break;
    }
  });
});
