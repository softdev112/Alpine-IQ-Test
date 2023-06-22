import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Grid, List, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, Card, Typography, ButtonBase } from '@material-ui/core';

// 1. Define the User type
type User = {
  id: string;
  rank: number;
  name: string;
  email: string;
  friends: string[];
  image: string;
  friendNames?: string[]; // Added optional property
  highestRankingFriend?: string; // Added optional property
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'top',
    alignItems: 'top',
    height: '100vh',
    marginTop: '100px'
  },
  list: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    padding: '16px',
  },
  button: {
    display: 'block',
    textAlign: 'initial',
    height: '100%'
  },
  listItem: {
    display: 'container',
    padding: '0px'
  },
  card: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s',
    '&:hover': {
      boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
    },
    padding: '16px'
  },
}));

export default function App() {
  const classes = useStyles();
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    // Fetch users' data from API endpoint
    setUsers(sampleData);
  }, []);

  // 3. Function to format User object
  const formatUser = (user: User): User => {
    const friendNames = user.friends.map((friendId) => {
      const friend = users.find((u) => u.id === friendId);
      return friend ? friend.name : '';
    });
    const highestRankingFriend = user.friends.reduce((highestRank, friendId) => {
      const friend = users.find((u) => u.id === friendId);
      return friend && friend.rank > highestRank ? friend.rank : highestRank;
    }, 0);
    return { ...user, friendNames, highestRankingFriend: highestRankingFriend.toString() };
  };

  const filteredUsers = users.filter((user) => {
    const query = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(query) ||
      user.id.toLowerCase().includes(query) ||
      user.friends.some((friendId) => friendId.toLowerCase().includes(query))
    );
  });

  // 4. User component
  const User = React.memo(({ user, onClick, isSelected }: { user: User; onClick: () => void; isSelected: boolean }) => (
    <ButtonBase className={classes.button} onClick={onClick}>
      <Card className={classes.card} style={{backgroundColor: isSelected ? '#AEE': '#FFF'}}>
        <List>
          <ListItem className={classes.listItem}>
            <ListItemAvatar>
              <Avatar src={user.image} alt={user.name} />
            </ListItemAvatar>
            <ListItemText primary={user.name} secondary={user.email} />
            <ListItemSecondaryAction>
              <Typography variant="body2">
                {`Rank: ${user.rank}`}
              </Typography>
            </ListItemSecondaryAction>
          </ListItem>
          <Typography>{user.friendNames?.join(', ')}</Typography>
        </List>
      </Card>
    </ButtonBase>
  ));

  const handleUserClick = (userId: string) => {
    setSelectedUser(userId);
  };

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <TextField
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            fullWidth
          />
          <List className={classes.list}>
            {filteredUsers.map((user) => (
              <User
                key={user.id}
                user={formatUser(user)}
                onClick={() => handleUserClick(user.id)}
                isSelected={user.id === selectedUser}
              />
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

const sampleData: User[] = [
  { id: "1", rank: 1, name: "John Doe", email: "john.doe@example.com", friends: ["2", "3", "4"], image: 'https://picsum.photos/200' },
  { id: "2", rank: 2, name: "Jane Smith", email: "jane.smith@example.com", friends: ["1", "3"], image: 'https://picsum.photos/200' },
  { id: "3", rank: 3, name: "Alex Johnson", email: "alex.johnson@example.com", friends: ["1", "2"], image: 'https://picsum.photos/200' },
  { id: "4", rank: 4, name: "Sarah Williams", email: "sarah.williams@example.com", friends: ["1"], image: 'https://picsum.photos/200' },
  { id: "5", rank: 5, name: "Michael Brown", email: "michael.brown@example.com", friends: [], image: 'https://picsum.photos/200' },
  { id: "6", rank: 6, name: "Emily Davis", email: "emily.davis@example.com", friends: [], image: 'https://picsum.photos/200' },
  { id: "7", rank: 7, name: "Christopher Wilson", email: "christopher.wilson@example.com", friends: [], image: 'https://picsum.photos/200' },
];
