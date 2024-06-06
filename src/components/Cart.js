import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
import { ProductContext } from "../App";
import { useContext } from "react";
import Btn from "./Btn";
import delIcon from "../images/icon-delete.svg";

const Cart = () => {
	const { count, image, setCount, setIsCart, isClicked } =
		useContext(ProductContext);

	const handleClear = () => {
		setCount(0);
		setIsCart(false);
	};

	return (
		<Box className="product-cart">
			<Box className="cart-head">
				<Typography variant="h6">Cart</Typography>
			</Box>
			<Divider />
			<Box className="cart-content">
				{isClicked && count > 0 ? (
					<Box>
						<Box className="row">
							<img src={image} alt={"product"} className="image" />
							<Box>
								<Typography variant="body1" color="text.secondary">
									Fall Limited Edition Sneakers
								</Typography>
								<Stack direction={"row"} spacing={3} alignItems={"center"}>
									<Typography variant="body1" color="text.secondary">
										$125.00 x {count}
									</Typography>
									<Typography variant="h6">${125 * count}</Typography>
								</Stack>
							</Box>
							<IconButton
								sx={{ width: "5%", height: "5%" }}
								onClick={handleClear}
							>
								<img src={delIcon} alt="delete" height={20} />
							</IconButton>
						</Box>
						<Btn text={"checkout"} icon={null} />
					</Box>
				) : (
					<Typography variant="body1" color="text.secondary">
						Your Cart is Empty
					</Typography>
				)}
			</Box>
		</Box>
	);
};

export default Cart;
