export const Buttons = (props: {
	handleClickButton: React.Dispatch<
		React.SetStateAction<{ amount: number; value: string }>
	>
}) => {
	const { handleClickButton } = props
	const buttons = [
		{
			name: "AC",
			className: "bg-red-900/60 hover:brightness-125 rounded-l-lg",
		},
		{ name: "del", className: "bg-red-900/60 hover:brightness-125" },
		{ name: " ", className: "bg-red-900/60" },
		{
			id: "buttonPow",
			name: "^",
			className: "bg-red-900/60 hover:brightness-125 rounded-tr-lg",
		},
		{ name: "7", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{ name: "8", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{ name: "9", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{
			id: "buttonDivision",
			name: "/",
			className: "bg-red-900/60 hover:brightness-125",
		},
		{ name: "4", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{ name: "5", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{ name: "6", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{
			id: "buttonMultiplication",
			name: "*",
			className: "bg-red-900/60 hover:brightness-125",
		},
		{ name: "1", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{ name: "2", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{ name: "3", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{
			id: "buttonSubtraction",
			name: "-",
			className: "bg-red-900/60 hover:brightness-125",
		},
		{
			id: "result",
			name: "=",
			className: "bg-red-900/60 hover:brightness-125 rounded-lg",
		},
		{ name: "0", className: "bg-gray-800/80 hover:brightness-125 rounded-lg" },
		{
			id: "buttonPoint",
			name: ".",
			className: "bg-red-900/60 hover:brightness-125 rounded-l-lg",
		},
		{
			id: "buttonAddition",
			name: "+",
			className: "bg-red-900/60 hover:brightness-125 rounded-br-lg",
		},
	]

	return (
		<div className="grid grid-cols-4">
			{buttons.map((item) => (
				<button
					key={item.name}
					data-testid={item.id ? item.id : `button${item.name}`}
					className={item.className}
					onClick={() =>
						handleClickButton((oldValue) => {
							return {
								amount: oldValue.amount + 1,
								value: item.name,
							}
						})
					}
				>
					{item.name}
				</button>
			))}
		</div>
	)
}
