import {Container, TextField, Typography, CircularProgress, Alert} from "@mui/material";
import {useUsers} from "../hooks/useUsers";
import UserTable from "../components/UserTable";

const UsersPage = () => {
    const {users, search, setSearch, loading, error} = useUsers();

    return (
        <Container sx={{mt: 4}}>
            <Typography variant="h4" gutterBottom>
                Users List
            </Typography>

            <TextField
                label="Search by name"
                fullWidth
                margin="normal"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                inputProps={{ "data-testid": "search-input" }}
            />

            {loading && <CircularProgress/>}
            {error && <Alert severity="error">{error}</Alert>}
            {!loading && !error && <UserTable users={users}/>}
        </Container>
    );
};

export default UsersPage;
