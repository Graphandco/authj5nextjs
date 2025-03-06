"use client";
import { logout } from "../actions/auth";
import { Button } from "./ui/button";

const Logout = () => {
	return <Button onClick={() => logout()}>Logout</Button>;
};

export default Logout;
