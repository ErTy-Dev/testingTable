import { useState, useEffect, useCallback } from 'react';

type Params = {
	[key: string]: string | null;
};

// Кастомный хук для работы с параметрами поиска
export const useSearchParams = () => {
	const [searchParams, setSearchParamsState] = useState<URLSearchParams>(() => new URLSearchParams(window.location.search));

	// Обновляем параметры при изменении URL
	useEffect(() => {
		const handlePopState = () => {
			setSearchParamsState(new URLSearchParams(window.location.search));
		};

		window.addEventListener('popstate', handlePopState);
		return () => {
			window.removeEventListener('popstate', handlePopState);
		};
	}, []);

	// Функция для получения текущих параметров
	const get = useCallback((): Params => {
		const params: Params = {};
		searchParams.forEach((value, key) => {
			params[key] = value;
		});
		return params;
	}, [searchParams]);

	// Функция для установки новых параметров
	const set = useCallback((params: Params) => {
		// Создаем новый объект URLSearchParams с текущими параметрами
		const newParams = new URLSearchParams();

		// Устанавливаем новые параметры
		Object.entries(params).forEach(([key, value]) => {
			if (value === null) {
				// Если значение равно null, удаляем параметр
				newParams.delete(key);
			} else {
				// Иначе, добавляем/обновляем параметр
				newParams.set(key, value);
			}
		});

		// Обновляем URL с новыми параметрами
		const newUrl = `${window.location.pathname}?${newParams.toString()}`;
		window.history.replaceState({}, '', newUrl);
		setSearchParamsState(newParams);
	}, []);

	// Функция для очистки всех параметров
	const clear = useCallback(() => {
		const newUrl = window.location.pathname;
		window.history.replaceState({}, '', newUrl);
		setSearchParamsState(new URLSearchParams());
	}, []);

	return { get, set, clear };
};
