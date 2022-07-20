import { CashIcon, ClockIcon, CodeIcon } from "@heroicons/react/outline";
import { Card } from "web/components/card";

export const AdvantagesContainer = () => {
	const defaultDescription =
		"Dolore id est eu labore commodo voluptate dolore dolore id irure officia. Non ut eu officia laboris est. Amet incididunt sint reprehenderit in occaecat adipisicing consectetur ea consequat. In proident esse fugiat minim proident occaecat cupidatat. Est ea aliqua eu deserunt quis ipsum sint deserunt occaecat magna voluptate elit deserunt.";
	const advantagesData = [
		{
			title: "Eficiência",
			description: defaultDescription,
			icon: <CodeIcon className="w-12 h-12 stroke-white" />,
		},
		{
			title: "Velocidade",
			description: defaultDescription,
			icon: <ClockIcon className="w-12 h-12 stroke-white" />,
		},
		{
			title: "Preços justos",
			description: defaultDescription,
			icon: <CashIcon className="w-12 h-12 stroke-white" />,
		},
	];

	return (
		<div className="flex flex-wrap gap-x-20 gap-y-10 justify-center">
			{advantagesData.map(advantage => (
				<Card key={advantage.title} {...advantage} />
			))}
		</div>
	);
};
