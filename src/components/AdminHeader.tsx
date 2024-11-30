/** @jsxImportSource theme-ui */
import { Box, Flex, Input, IconButton, Avatar } from 'theme-ui';
import { Moon, Bell, Settings, Clock } from 'lucide-react'; // Assuming you're using lucide-react for icons

const AdminHeader = ({ title = "CREATE PRODUCT" }) => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 3,
        marginLeft: '15%'
      }}
    >
      {/* Left side - Title */}
      <Box sx={{ fontSize: 3, fontWeight: 'bold', color: 'gray.6' }}>
        {title}
      </Box>

      {/* Right side - Icons and Search */}
      <Flex sx={{ alignItems: 'center', gap: 3 }}>
        {/* Theme toggle */}
        <IconButton
          sx={{
            color: 'gray.6',
            '&:hover': { color: 'primary' }
          }}
        >
          <Moon size={20} />
        </IconButton>

        {/* Notifications */}
        <Box sx={{ position: 'relative' }}>
          <IconButton
            sx={{
              color: 'gray.6',
              '&:hover': { color: 'primary' }
            }}
          >
            <Bell size={20} />
          </IconButton>
          {/* Notification badge */}
          <Box
            sx={{
              position: 'absolute',
              top: -2,
              right: -2,
              bg: 'red',
              color: 'white',
              borderRadius: '50%',
              width: '18px',
              height: '18px',
              fontSize: '11px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            3
          </Box>
        </Box>

        {/* Settings */}
        <IconButton
          sx={{
            color: 'gray.6',
            '&:hover': { color: 'primary' }
          }}
        >
          <Settings size={20} />
        </IconButton>

        {/* Time */}
        <IconButton
          sx={{
            color: 'gray.6',
            '&:hover': { color: 'primary' }
          }}
        >
          <Clock size={20} />
        </IconButton>

        {/* Avatar */}
        <Avatar
          src="/path-to-avatar-image.jpg"
          sx={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            cursor: 'pointer'
          }}
        />

        {/* Search */}
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Input
            placeholder="Search..."
            sx={{
              pl: 3,
              pr: '40px',
              py: 2,
              borderRadius: 'full',
              border: '1px solid',
              borderColor: 'gray.2',
              bg: 'gray.1',
              '&:focus': {
                outline: 'none',
                borderColor: 'primary',
                bg: 'white'
              }
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              right: 3,
              color: 'gray.5',
              pointerEvents: 'none'
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AdminHeader;