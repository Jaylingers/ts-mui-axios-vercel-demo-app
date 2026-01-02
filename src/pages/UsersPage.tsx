import {Container, TextField, Typography, CircularProgress, Alert, InputAdornment, SvgIcon} from "@mui/material";
import {useUsers} from "../hooks/useUsers";
import UserTable from "../components/UserTable";

const UsersPage = () => {
    const {users, search, setSearch, loading, error} = useUsers();

    return (
        <Container sx={{mt: 4}}>
            <Typography variant="h4" component="h1" gutterBottom fontWeight={700}>
                Users List 🚀
            </Typography>
            <TextField
                label="Search by name"
                fullWidth
                margin="normal"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                inputProps={{ "data-testid": "search-input" }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SvgIcon color="primary" sx={{ fontSize: 20 }}>
                                <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16a6.47 6.47 0 004.23-1.57l.27.28v.79l5 5L20.5 19l-5-5zm-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14z" />
                            </SvgIcon>
                        </InputAdornment>
                    ),
                }}
                sx={{
                    backgroundColor: "background.paper",
                    borderRadius: 3,
                    boxShadow: (theme) => `0 12px 35px ${theme.palette.primary.main}20`,
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 3,
                        "& fieldset": {
                            borderColor: (theme) => theme.palette.primary.light,
                        },
                        "&:hover fieldset": {
                            borderColor: (theme) => theme.palette.primary.main,
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: (theme) => theme.palette.primary.dark,
                            boxShadow: (theme) => `0 0 0 2px ${theme.palette.primary.main}40`,
                        },
                    },
                }}
            />


            {loading && <CircularProgress/>}
            {error && <Alert severity="error">{error}</Alert>}
            {!loading && !error && <UserTable users={users}/>}
            <div className="flex flex-wrap gap-4 my-8 justify-center text-center">
                <div className="px-8 py-4 rounded-[999px] bg-[radial-gradient(circle_at_top,_#fdf2f8,_#f5d0fe,_#c084fc)] text-purple-900 font-semibold shadow-xl shadow-fuchsia-500/25 flex items-center justify-center min-w-[260px] gap-2 border border-white/60">
                    <span className="text-2xl">🎨</span>
                    <span>Created by Jaylingers</span>
                </div>
                <div className="px-8 py-4 rounded-[999px] bg-[radial-gradient(circle_at_top,_#e0f2fe,_#bae6fd,_#7dd3fc)] text-sky-900 font-semibold shadow-xl shadow-sky-500/25 flex items-center justify-center min-w-[260px] gap-2 border border-white/60">
                    <span className="text-2xl">⚡</span>
                    <span>Tailwind Powered</span>
                </div>
            </div>

        </Container>
    );
};

export default UsersPage;
