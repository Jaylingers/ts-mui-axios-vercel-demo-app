import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { User } from "../types/user";

interface Props {
    users: User[];
}

const StyledTableHeadCell = styled(TableCell)(({ theme }) => ({
    background: `linear-gradient(120deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
    color: theme.palette.common.white,
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: 12,
    letterSpacing: 0.8,
    borderBottom: "none",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
    fontSize: 14,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    transition: theme.transitions.create("background-color", {
        duration: theme.transitions.duration.shortest,
    }),
    "&:nth-of-type(odd)": {
        backgroundColor: alpha(theme.palette.primary.light, 0.04),
    },
    "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
    },
}));

const UserTable = ({ users }: Props) => {
    return (
        <TableContainer
            component={Paper}
            sx={(theme) => ({
                borderRadius: 3,
                overflow: "hidden",
                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
                boxShadow: `0 20px 45px ${alpha(theme.palette.common.black, 0.15)}`,
            })}
        >
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <StyledTableHeadCell>Name</StyledTableHeadCell>
                        <StyledTableHeadCell>Email</StyledTableHeadCell>
                        <StyledTableHeadCell>Company</StyledTableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <StyledTableRow key={user.id}>
                            <StyledTableCell sx={{ fontWeight: 600 }}>{user.name}</StyledTableCell>
                            <StyledTableCell>{user.email}</StyledTableCell>
                            <StyledTableCell>{user.company.name}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UserTable;
