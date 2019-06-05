

const _dict = {
	add_new: 'Dodaj nowy',
	company_name: 'Nazwa firmy',
	company_position: 'Pozycja w firmie',
	choose_photo: 'Wybierz zdjęcie',
	date_begin: 'Data rozpoczęcia',
	date_end: 'Data zakończenia',
	delete: 'Usuń',
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
	skill_name: 'Nazwa umiejętności',
	skills: 'Umiejętności',
}

export default (key) => {
	return _dict[key];
}