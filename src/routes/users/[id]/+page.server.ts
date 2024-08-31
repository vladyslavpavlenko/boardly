import prisma from "$lib/prisma";
import type { PageServerLoad } from './$types';

export const load = (async ({ params: { id } }) => {
	const user = await prisma.user.findUnique({
		where: { id: Number(id) },
		include: {
			location: true,
			hostedEvents: {
				include: {
					location: true,
				},
			},
			attendedEvents: {
				include: {
					event: true,
				},
			},
		},
	});

	return { user };
}) satisfies PageServerLoad;