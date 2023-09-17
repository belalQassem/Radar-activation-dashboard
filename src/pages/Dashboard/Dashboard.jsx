import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../utils/theme";




import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VerifiedIcon from '@mui/icons-material/Verified';
import RadarIcon from '@mui/icons-material/Radar';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import StatBox from "../../components/StatBox";
import Grid from "@mui/material/Grid";
import { StyledDiv } from "../CreateUser/style";
import Content from "../../components/ContentPage/Content";
import { GetNumberOfUser } from "../../services/Api";
import { useState, useEffect } from "react";
import { GetNumberOfActiveMotherboards, GetNumberOfMotherboards, RateofActiveMotherboards, Recent } from "../../services/Motherbords";
import dayjs from "dayjs";

const Dashboard = () => {
    const [count, setCount] = useState(0);
    const [numberOfradar, setNumberOfradar] = useState(0);
    const [numberOfradarActivated, setNumberOfradarActivated] = useState(0);
    const [rate, setRate] = useState(0);
    const [recentRadar ,setRecentRadar] = useState([]);
    const token = localStorage.getItem("token");
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    useEffect(() => {
        const NumberOfUsers = async () => {
            try {
                const res = await GetNumberOfUser(token);
                if (res.data.data.status === 200) {
                    setCount(res.data.data.number_of_users);
                }
            } catch (error) {
                console.log(error);
            }
        };
        NumberOfUsers();
        const NumberOfRadars = async () => {
            try {
                const res = await GetNumberOfMotherboards(token);
                if (res.data.data.status === 200) {
                    setNumberOfradar(res.data.data.number_of_all_radars);
                }
            } catch (error) {
                console.log(error);
            }
        };
        NumberOfRadars();
        const NumberOfActivatedRadars = async () => {
            try {
                const res = await GetNumberOfActiveMotherboards(token);
                if (res.data.data.status === 200) {
                    setNumberOfradarActivated(res.data.data.number_of_activated_radars);
                }
            } catch (error) {
                console.log(error);
            }
        };
        NumberOfActivatedRadars();
        const rateOfRadarActivation = async () => {
            try {
                const res = await RateofActiveMotherboards(token);
                if (res.data.data.status === 200) {
                    setRate(res.data.data.rate_of_radar_activation);
                }
            } catch (error) {
                console.log(error);
            }
        };
        rateOfRadarActivation();
        const RecentRadarActivated = async () => {
            try {
                const res = await Recent(token);
                if (res.data.data.status === 200) {
                    setRecentRadar(res.data.data.recent_logins);
                }
            } catch (error) {
                console.log(error);
            }
        };
        RecentRadarActivated();
    }, [token]);



    return (
        <StyledDiv>
            <Content>
                <Box m="20px">
                    <Grid container spacing={2} mt={1}>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Box
                                gridColumn="span 3"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                width="100%"
                            >
                                <StatBox
                                    title={count}
                                    subtitle="Users" //3
                                    progress="0.30"
                                    increase="+5%"
                                    icon={
                                        <PersonAddIcon
                                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                        />
                                    }
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Box
                                gridColumn="span 3"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <StatBox
                                    title={numberOfradar}
                                    subtitle="Radars"  //4
                                    progress="0.80"
                                    increase="+43%"
                                    icon={
                                        <RadarIcon
                                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                        />
                                    }
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Box
                                gridColumn="span 3"
                                backgroundColor={colors.primary[400]}
                                display="flex"
                                width="100%"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <StatBox
                                    title={numberOfradarActivated}
                                    subtitle="Activated Radars" //2
                                    progress="0.50"
                                    increase="+85%"
                                    icon={
                                        <VerifiedIcon
                                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                        />
                                    }
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Box
                                backgroundColor={colors.primary[400]}
                                width="100%"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <StatBox
                                    title={rate}
                                    subtitle="Rate of radar activation"    //1
                                    progress="0.75"
                                    increase="+99%"
                                    icon={
                                        <TrendingUpIcon
                                            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                        />
                                    }
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} mt={2}>
        

        <Grid item xs={12} lg={12}>
          <Box
            backgroundColor={colors.primary[400]}
            height="300px"
            overflow="auto"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="15px"
            >
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600" 
              >
                Recent Radars Activated    
              </Typography>
            </Box>
            {recentRadar.map((radar) => (
              <Box
                key={radar.id}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="15px"
              >
                <Box>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    street name : {radar.street_name}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                  location id : {radar.location_id}
                  </Typography>
                </Box>
                <Box color={colors.grey[100]}> approved time : {dayjs(radar.approved_time).format("DD/MM/YYYY  HH:mm:ss")}</Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                >
                  key : {radar.key}
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
                </Box>
            </Content>
        </StyledDiv>


    );
};

export default Dashboard;
