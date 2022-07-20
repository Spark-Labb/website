import { CashIcon, ClockIcon, CodeIcon } from "@heroicons/react/outline";
import { Card } from "web/components/card";

export const AdvantagesContainer = () => {
	const advantagesData = [
		{
			title: "Eficiência",
			description:
				"Você paga e o resto é com a gente. Conte com um suporte completo da nossa equipe até que seu bot esteja completamente feito.",
			icon: <CodeIcon className="w-12 h-12 stroke-black dark:stroke-white" />,
		},
		{
			title: "Velocidade",
			description:
				"Sabemos como é ruim ficar esperando, então nossa equipe se dedica ao máximo para entregar a sua aplicação com a melhor qualidade, no menor tempo.",
			icon: <ClockIcon className="w-12 h-12 stroke-black dark:stroke-white" />,
		},
		{
			title: "Preços justos",
			description:
				"Sabemos que a situação não é das melhores para todo mundo. Portanto, faremos o possível para negociar um preço que caiba no seu bolso.",
			icon: <CashIcon className="w-12 h-12 stroke-black dark:stroke-white" />,
		},
	];

	return (
		<div className="flex flex-wrap gap-x-20 gap-y-10 justify-center">
			{advantagesData.map(({ title, description, icon }) => (
				<Card key={title}>
					<div className="flex flex-col gap-2 justify-center items-center">
						{icon}
						<h1 className="font-bold font-heading text-xl">{title}</h1>
					</div>

					<p className="flex justify-center text-base text-center items-center">
						{description}
					</p>
				</Card>
			))}
		</div>
	);
};
