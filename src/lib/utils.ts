export const renderRemainingTime = (deadline: string) => {
	const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

	const now = new Date();
	const deadlineDate = new Date(deadline);

	const diff = deadlineDate.getTime() - now.getTime();

	if (diff < 1) return 'TIMEDOUT'

	const zfill = (num: number) => Number(num).toString().padStart(2, '0');

	const days = zfill(Math.floor(diff / day)),
		hours = zfill(Math.floor((diff % day) / hour)),
		minutes = zfill(Math.floor((diff % hour) / minute)),
		seconds = zfill(Math.floor((diff % minute) / second));

	return {
		days,
		hours,
		minutes,
		seconds
	};
};
