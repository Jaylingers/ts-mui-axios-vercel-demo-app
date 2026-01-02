import {useEffect, useState} from "react"; // React hooks for state and side effects
import {User} from "../types/user";        // TypeScript type for user
import api from "../api/axios";              // Axios instance for API calls

// Custom hook to fetch and manage users
export const useUsers = () => {
    // State to store all users fetched from API
    const [users, setUsers] = useState<User[]>([]);

    // State to store the current search input
    const [search, setSearch] = useState("");

    // State to track loading status while fetching users
    const [loading, setLoading] = useState(true);

    // State to store any error messages from API call
    const [error, setError] = useState<string | null>(null);

    // Function to fetch users from the API
    const fetchUsers = () => {
        // Define an async function to handle the API request
        const fn = async () => {
            try {
                // Make GET request to /users endpoint
                const response = await api.get<User[]>("/users");

                // Store the fetched users in state
                setUsers(response.data);
            } catch (err) {
                // If there is an error, store a friendly message
                setError("Failed to load users");
            } finally {
                // Whether success or failure, stop the loading spinner
                setLoading(false);
            }
        }
        // Call the async function and ignore the returned promise
        fn().then();
    }

    // useEffect to fetch users when the component mounts
    // Empty dependency array [] ensures it runs only once
    useEffect(fetchUsers, []);

    // Filter users based on the search input (case-insensitive)
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );

    // Return everything needed by the component
    return {
        users: filteredUsers, // filtered users based on search
        search,               // current search input value
        setSearch,            // function to update search input
        loading,              // loading status
        error,                // error message if API fails
    };
};