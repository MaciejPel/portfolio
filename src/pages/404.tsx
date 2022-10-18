import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ErrorPage = () => {
	const router = useRouter();

	useEffect(() => {
		router.push('/');
	}, [router]);

	return <div className="min-h-screen" />;
};

export default ErrorPage;
