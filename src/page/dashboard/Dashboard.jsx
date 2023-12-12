import React, {useState} from "react";
import {BarChart} from "../../component/chartjs/BarChart";
import LineChart from "../../component/chartjs/LineChart";
import {Line} from "react-chartjs-2";
import DataTable from "../../component/DataTable";

const Dashboard = () => {
    const [chartData, setChartData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Users Gained',
                data: [50, 120, 80, 150, 200],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    });

    const columns = [
        { Header: 'ID', accessor: 'id' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Amount', accessor: 'amount' },
    ];

    const data = [
        { id: 1, name: 'Bitcoin', amount: 1.5 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        { id: 2, name: 'Ethereum', amount: 3.2 },
        { id: 3, name: 'Litecoin', amount: 5.7 },
        // Add more data as needed
    ];

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <BarChart chartData={chartData} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <LineChart chartData={chartData} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col md-12">
                    <div className="card">
                        <div className="card-body">
                            <DataTable columns={columns} data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;