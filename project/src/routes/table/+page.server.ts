export interface User {
	id: string;
	name: string;
	balance: number;
	email: string;
	registerAt: Date;
	active: boolean;
}

let mockId = 0;

const data: User[] = [
	{
		id: ++mockId,
		name: 'page 1',
		balance: 1000000,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 1000000,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 1000,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 2000,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 92392391,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'page 2',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'page 3',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'page 4',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'page 5',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'page 6',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'page 7',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'page 8',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'page 9',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'page 10',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	},
	{
		id: ++mockId,
		name: 'a',
		balance: 0,
		email: 'a@mail.com',
		registerAt: new Date(),
		active: false
	}
];

export const load = (): unknown => {
	return {
		data
	};
};
