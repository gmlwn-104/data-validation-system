import { Card, CardContent, Typography, Box } from "@mui/material";

function StatCard({ title, value, icon: Icon, color, bg }) {
  return (
    <Card
      sx={{
            borderRadius: 3,
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            transition: "0.3s",
            minHeight: 140, // 👈 추가
            display: "flex",
            alignItems: "center",
            "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            },
        }}
    >
      <CardContent>
        
        {/* 상단 */}
        <Box
        sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
        }}
        >
          {/* 왼쪽 텍스트 */}
        <Typography variant="body2" color="text.secondary">
            {title}
        </Typography>


          {/* 오른쪽 아이콘 */}
        <Box
            sx={{
            backgroundColor: bg,
            borderRadius: "50%",
            p: 1.5,          // 👈 아이콘 여백 증가
            ml: 2,           // 👈 텍스트랑 거리 확보
            }}
        >
            <Icon sx={{ color, fontSize: 28 }} />
        </Box>
        </Box>

        {/* 숫자 */}
        <Typography variant="h4" fontWeight="bold">
          {value}
        </Typography>

      </CardContent>
    </Card>
  );
}

export default StatCard;