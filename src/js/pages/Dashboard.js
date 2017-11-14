import React from "react";

import ChartBox from "../components/ChartBox";

const Dashboard = (props) => {

	return (
		<div>
			<div class="chart-row">
				<ChartBox title="Income and Expenses: 2017"
									image="../../images/income-expenses-full.png"
									cols={1} />
			</div>
			<div class="chart-row">
				<div class="chart-col-2-container">
						<ChartBox title="Income and Expenses: October"
									image="../../images/income-expenses.png"
									cols={2} float="left"/>
				</div>
				<div class="chart-col-2-container">
				<ChartBox title="Top Customers: 2017"
									image="../../images/top-customers.png"
									cols={2} float="right"/>
				</div>
			</div>

			<div class="chart-row">
				<div class="chart-col-2-container">
				<div class="table-container left">
						<h3>Receivables</h3>
						<table>
								<tbody>
								<tr>
									<th>Current</th>
									<th>Overdue</th>
									<th>Total</th>
								</tr>
								<tr>
									<td>$20,000</td>
									<td>$30,000</td>
									<td>$50,000</td>
								</tr>
								</tbody>
						</table>
				</div>
				</div>
				<div class="chart-col-2-container">
				<div class="table-container right">
				<h3>Payables</h3>
				<table>
						<tbody>
						<tr>
							<th>Current</th>
							<th>Overdue</th>
							<th>Total</th>
						</tr>
						<tr>
							<td>$30,000</td>
							<td>$40,000</td>
							<td>$70,000</td>
						</tr>
						</tbody>
				</table>
				</div>
				</div>
			</div>

			<div class="chart-row">
				<div class="chart-col-2-container">
				<div class="table-container left">
				<h3>Net Income (Month)</h3>
				<table>
						<tbody>
						<tr>
							<th></th>
							<th>October</th>
							<th>November</th>
						</tr>
						<tr>
							<td>Income</td>
							<td>$1,500,000</td>
							<td>$20,000</td>
						</tr>
						<tr>
							<td>Expenses</td>
							<td>$300,000</td>
							<td>$200,000</td>
						</tr>
						<tr>
							<td>Net Income</td>
							<td>$100,000</td>
							<td>$200,000</td>
						</tr>
						</tbody>
				</table>
				</div>
				</div>
					<div class="chart-col-2-container">
					<div class="table-container right">
					<h3>Net Income (Year)</h3>
				<table>
						<tbody>
						<tr>
							<th></th>
							<th>2016</th>
							<th>2017</th>
						</tr>
						<tr>
							<td>Income</td>
							<td>$1,500,000</td>
							<td>$20,000</td>
						</tr>
						<tr>
							<td>Expenses</td>
							<td>$300,000</td>
							<td>$200,000</td>
						</tr>
						<tr>
							<td>Net Income</td>
							<td>$100,000</td>
							<td>$200,000</td>
						</tr>
						</tbody>
				</table>
				</div>
				</div>
			</div>

		</div>
	);
};

export default Dashboard;
