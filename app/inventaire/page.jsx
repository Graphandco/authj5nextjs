import ProductsList from "../../components/ProductsList";

const InventairePage = () => {
	return (
		<div>
			<h1>Inventaire</h1>
			<ProductsList pageType={"inventaire"} />
		</div>
	);
};

export default InventairePage;
