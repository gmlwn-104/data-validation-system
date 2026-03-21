import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { useEffect, useState } from "react";

function Dashboard() {

  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(res => res.json())
      .then(data => setUserCount(data.totalElements));
  }, []);

  return (
    <Container>

      <Typography variant="h4" sx={{ mt: 4, mb: 4 }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>

              <Typography variant="h6">
                Total Users
              </Typography>

              <Typography variant="h3">
                {userCount}
              </Typography>

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>

              <Typography variant="h6">
                System Logs
              </Typography>

              <Typography variant="h3">
                12
              </Typography>

            </CardContent>
          </Card>
        </Grid>

      </Grid>

    </Container>
  );
}

export default Dashboard;