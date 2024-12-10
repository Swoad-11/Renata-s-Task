# Assignment

This project is a React-based assignment which is combined of two tasks where Task-1 will show 2 charts based on given data and Task-2 is an interactive dashboard with a filterable dataset and a dynamic pie chart displaying gender-based statistics. Both tasks are responsive.

## Routing

The React routing in this project enables seamless navigation between task-1 and task-2. The application uses two main routes: the homepage (/) for task-1 and (/dashboard) for task-2.

---

### 1. Sidebar with Filters

- Division Filter: Allows users to filter data by geographical divisions.
- Gender Filter: Enables filtering by gender.
- Marital Status Filter: Filters data based on marital status.

### 2. Dynamic Pie Chart

- Visual representation of gender distribution using a pie chart.
- Data labels display the exact number of males and females.

### 3. Live Data Filtering

- The sidebar filters dynamically update the dataset displayed in the content area and the pie chart.
- Ensures that data visualizations and views are always synchronized.

---

## Technologies Used

- React: For building the user interface.
- react-chartjs-2: For creating the pie chart.
- chartjs-plugin-datalabels: For displaying numbers directly on the pie chart.
- Tailwind CSS: For styling the components.
