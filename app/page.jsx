import { auth } from "../auth";
import Homepage from "../components/Homepage";

const Home = async () => {
	const session = await auth();
	if (!session?.user) {
		// redirect("/");
		return <div>Non connecté</div>;
	}
	return (
		<>
			<Homepage />
		</>
	);
};
export default Home;
