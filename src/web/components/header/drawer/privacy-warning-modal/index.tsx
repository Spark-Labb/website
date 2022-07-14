import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import { XIcon } from "@heroicons/react/solid";
import Link from "next/link";
import type { FunctionComponent } from "react";
import { Button } from "web/components/button";

interface HeaderDrawerPrivacyWarningModalProps {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const HeaderDrawerPrivacyWarningModal: FunctionComponent<
	HeaderDrawerPrivacyWarningModalProps
> = ({ isOpen, onClose }: HeaderDrawerPrivacyWarningModalProps) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			size="3xl"
			isCentered
			blockScrollOnMount={false}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader className="flex items-center justify-between">
					Antes de você continuar com o login...
					<button onClick={onClose}>
						<XIcon className="icon" />
					</button>
				</ModalHeader>

				<ModalBody className="font-sans">
					<p className="mb-2">
						Recomendamos que você leia os nossos{" "}
						<Link href="/privacy" passHref>
							<a className="link">Termos de Privacidade</a>
						</Link>
						, no entanto, aqui estão algumas informações que iremos coletar{" "}
						<strong>quando você fizer o login</strong>:
					</p>
					<ul className="list-disc ml-[1.15rem]">
						<li>Seu ID do Discord;</li>
						<li>Seu nome no Discord;</li>
						<li>Sua foto de perfil no Discord;</li>
						<li>Seu endereço de E-mail;</li>
					</ul>
					<p className="mt-2">
						Caso você tenha alguma objeção ao coletamento dos dados citados
						acima ou a qualquer outra diretriz nos{" "}
						<Link href="/privacy" passHref>
							<a className="link">Termos de Privacidade</a>
						</Link>
						, não use nossos serviços.
					</p>
				</ModalBody>

				<ModalFooter>
					<div className="flex w-full items-center justify-center md:justify-between">
						<Link href="/privacy" passHref>
							<a className="link hidden md:flex">
								Ver os Termos de Privacidade
							</a>
						</Link>
						<div className="flex gap-2">
							<a
								href={process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URL}
								className="transition-transform px-7 py-2 text-white bg-red-500 rounded-lg hover:drop-shadow-md hover:-translate-y-[0.1rem]"
							>
								Concordar
							</a>
							<Button type="secondary" onClick={onClose}>
								Rejeitar
							</Button>
						</div>
					</div>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
