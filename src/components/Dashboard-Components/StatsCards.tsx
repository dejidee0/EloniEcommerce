import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Icon } from '@iconify/react';

type StatCardProps = {
  icon: string;
  title: string;
  value: number | string;
  changePercentage?: number; // Optional for showing percentage change
  timePeriod?: string; // Optional time period
};

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, changePercentage, timePeriod }) => {
  return (
    <Card sx={{ minWidth: 200, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Box
            sx={{
              p: 1,
              borderRadius: '50%',
              backgroundColor: 'primary.light',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 48,
              height: 48,
            }}
          >
            <Icon icon={icon} style={{ fontSize: 32, color: '#1976d2' }} />
          </Box>
          <Box ml={2}>
            <Typography variant="subtitle1" color="textSecondary">
              {title}
            </Typography>
            <Typography variant="h5" color="textPrimary">
              {value}
            </Typography>
          </Box>
        </Box>
        {changePercentage !== undefined && (
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="body2" color="textSecondary">
              {timePeriod}
            </Typography>
            <Typography variant="body2" color={changePercentage >= 0 ? 'success.main' : 'error.main'}>
              {changePercentage >= 0 ? `+${changePercentage}%` : `${changePercentage}%`}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;
