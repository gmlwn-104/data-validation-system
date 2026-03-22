import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

function UserChart() {
  // 👉 임시 데이터 (나중에 API로 교체)
  const [data, setData] = useState([]);

  useEffect(() => {
  fetchTrend();
    }, []);

    const fetchTrend = async () => {
    try {
        const res = await axios.get("http://localhost:8080/users/trend");
        setData(res.data);
    } catch (err) {
        console.error("차트 데이터 실패", err);
    }
    };

     if (!data || data.length === 0) {
        return <div>Loading...</div>;
    }

  return (
  <Card
    sx={{
      mt: 4,
      borderRadius: 3,
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    }}
  >
    <CardContent>
      <Typography variant="h6" gutterBottom>
        User Trend (Last 7 Days)
      </Typography>

      {/* 👇 핵심: minWidth + height */}
      <div style={{ width: "100%", height: 300, minWidth: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#1976d2"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </CardContent>
  </Card>
);
}

export default UserChart;