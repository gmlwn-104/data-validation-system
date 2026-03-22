import { Container, Typography, Grid } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BarChartIcon from "@mui/icons-material/BarChart";
import StatCard from "../components/StatCard";
import { useEffect, useState } from "react";
import UserChart from "../components/UserChart";
import axios from "axios";

function Dashboard() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    fetchUserCount();
  }, []);

  const fetchUserCount = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users/count");
      setUserCount(response.data);
    } catch (error) {
      console.error("유저 수 조회 실패", error);
    }
  };

  const cards = [
    {
      title: "Total Users",
      value: userCount,
      icon: PeopleIcon,
      color: "#1976d2",
      bg: "#e3f2fd",
    },
    {
      title: "Today Users",
      value: 5,
      icon: PersonAddIcon,
      color: "#2e7d32",
      bg: "#e8f5e9",
    },
    {
      title: "Active Users",
      value: 20,
      icon: CheckCircleIcon,
      color: "#ed6c02",
      bg: "#fff3e0",
    },
    {
      title: "System Logs",
      value: 12,
      icon: BarChartIcon,
      color: "#6a1b9a",
      bg: "#f3e5f5",
    },
  ];

  return (
    <Container sx={{ mt: 6 }}>
      
      {/* 타이틀 */}
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Dashboard
      </Typography>

      {/* 카드 */}
      <Grid container spacing={3}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <StatCard {...card} />
          </Grid>
        ))}
      </Grid>

      <UserChart />

    </Container>
  );
}

export default Dashboard;