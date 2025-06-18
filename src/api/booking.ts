import axios from 'axios';
import { encode } from '../utils/form-netlify';

export async function submitBooking(form: Record<string, string>) {
	return axios.post('/', encode({ 'form-name': 'book', ...form }), {
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
	});
}
