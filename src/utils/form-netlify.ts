export function encode(data: Record<string, string>): string {
	return Object.keys(data)
		.map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&');
}
