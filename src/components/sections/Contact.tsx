import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import emailjs from '@emailjs/browser';
import { en, pl } from '../../utils/translation';

interface ContactProps {
	active: string;
	setRef: (e: HTMLElement) => HTMLElement;
}

const Contact: React.FC<ContactProps> = ({ active, setRef }) => {
	const { locale } = useRouter();
	const t = locale === 'en' ? en : pl;

	const contactForm = useRef<HTMLFormElement | null>(null);
	const [contactState, setContactState] = useState({
		error: false,
		success: false,
		form: { name: '', email: '', message: '' },
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID,
			templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID,
			publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

		if (!contactForm || !serviceId || !templateId || !publicKey) {
			setContactState({ ...contactState, error: true });
			return;
		}
		emailjs.sendForm(serviceId, templateId, contactForm.current as HTMLFormElement, publicKey).then(
			(res) => {
				setContactState({
					...contactState,
					success: true,
					form: { name: '', email: '', message: '' },
				});
			},
			(err) => {
				setContactState({ ...contactState, error: true });
			}
		);
	};

	return (
		<section
			id="contact"
			ref={setRef}
			className="md:py-4 py-2 dark:bg-zinc-800 bg-zinc-200"
		>
			<div className="container mx-auto 2xl:px-96 xl:px-64 lg:px-24 md:px-8 p-4">
				<div className="lg:text-5xl font-bold text-3xl mb-2">{t.sections.contact.title}</div>
				<form
					ref={contactForm}
					className="flex justify-center flex-col gap-4"
					onSubmit={handleSubmit}
				>
					<div className="flex gap-4 md:flex-row flex-col">
						<input
							type="text"
							placeholder={t.sections.contact.name}
							id="name"
							name="name"
							autoComplete="off"
							className="w-full p-4 rounded outline-none shadow bg-zinc-50 focus:bg-white dark:bg-zinc-700 dark:focus:bg-zinc-600"
							required={true}
							onChange={(e) =>
								setContactState({
									...contactState,
									form: { ...contactState.form, name: e.target.value },
								})
							}
						/>
						<input
							type="email"
							placeholder={t.sections.contact.email}
							id="email"
							name="email"
							autoComplete="off"
							className="w-full p-4 rounded outline-none shadow bg-zinc-50 focus:bg-white dark:bg-zinc-700 dark:focus:bg-zinc-600"
							required={true}
							onChange={(e) =>
								setContactState({
									...contactState,
									form: { ...contactState.form, email: e.target.value },
								})
							}
						/>
					</div>
					<div className="flex">
						<textarea
							placeholder={t.sections.contact.message}
							id="message"
							name="message"
							rows={8}
							className="w-full p-4 rounded outline-none shadow resize-none bg-zinc-50 focus:bg-white dark:bg-zinc-700 dark:focus:bg-zinc-600"
							required={true}
							onChange={(e) =>
								setContactState({
									...contactState,
									form: { ...contactState.form, message: e.target.value },
								})
							}
						/>
					</div>
					<div className="flex justify-between md:flex-row flex-col gap-4">
						<div
							className={`px-4 py-2 rounded shadow font-medium text-center ${
								contactState.error
									? 'block cursor-pointer bg-red-400 mobileHover:hover:bg-red-500'
									: ''
							} ${
								contactState.success
									? 'block cursor-pointer bg-green-500 mobileHover:hover:bg-green-600'
									: ''
							} ${
								!contactState.error && !contactState.success
									? 'opacity-0 md:block hidden cursor-auto select-none'
									: ''
							}`}
							onClick={() => setContactState({ ...contactState, error: false, success: false })}
						>
							{contactState.error && t.sections.contact.error}
							{contactState.success && t.sections.contact.success}
						</div>
						<input
							type="submit"
							value={t.sections.contact.submit}
							className="px-4 py-2 rounded shadow cursor-pointer mobileHover:hover:bg-amber-400 mobileHover:dark:hover:bg-blue-600 bg-zinc-50 dark:bg-zinc-700 font-medium"
						/>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
