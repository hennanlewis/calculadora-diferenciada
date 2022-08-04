import { validateExpression } from "../utils/validadeExpression"

interface DisplayProps {
	displayExpression: string
	displayValue: string
}

export const Display = ({ displayExpression, displayValue }: DisplayProps) => {

	return (
		<div className="flex flex-col justify-between items-end gap-2 h-32 text-right text-sm">
			<span id="display-value" className="text-ellipsis overflow-hidden w-11/12 font-thin text-4xl text-right">
				{displayValue}
			</span>
			<span id="display-expression" data-testid="display-expression" className="flex px-1 break-all text-right text-ellipsis">
				{validateExpression(displayExpression)}
			</span>
		</div>
	)
}