

const _dict = {
	company_name: 'Nazwa firmy',
	company_position: 'Pozycja w firmie',
	date_begin: 'Data rozpoczęcia',
	date_end: 'Data zakończenia',
	description: 'Opis',
	education_history: 'Historia edukacji',
	email: 'Email',
	employment_date_begin: 'Data rozpoczęcia zatrudnienia',
	employment_date_end: 'Data zakończenia zatrudnienia',
	employment_history: 'Historia zatrudnienia',
	full_name: 'Pełne imię oraz nazwisko',
	home_title: 'Kreator CV',
	institution_name: 'Nazwa instytucji',
	page_address: 'Adres strony',
	personal_data: 'Dane osobowe',
	phone: 'Numer telefonu',
	study_field: 'Kierunek studiow',
	study_level: 'Poziom studiów',
	skills: 'Umiejętnosci',
}

export default (key) => {
	return _dict[key];
}