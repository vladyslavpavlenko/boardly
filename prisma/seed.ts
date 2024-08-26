// npx tsx ./prisma/seed.ts

import { UserType, PrismaClient } from '@prisma/client';
import usersData from './initial/users.json' assert { type: 'json' };
import eventsData from './initial/events.json' assert { type: 'json' };
import locationsData from './initial/locations.json' assert { type: 'json' };

const prisma = new PrismaClient();

async function main() {
	// Insert Locations
	for (const location of locationsData) {
		await prisma.location.create({
			data: location,
		});
	}

	// Insert Users
	for (const user of usersData) {
		await prisma.user.create({
			data: {
				...user,
				userType: user.userType as UserType,
			},
		});
	}

	// Insert Events
	for (const event of eventsData) {
		await prisma.event.create({
			data: event,
		});
	}

	console.log('Seeding finished.');
}

main()
	.catch((e) => {
		console.error(e);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});