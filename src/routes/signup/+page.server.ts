// // src/routes/signup/+page.server.ts
//
// import { fail } from '@sveltejs/kit';
// import prisma from "$lib/prisma";
// import { redirect } from '@sveltejs/kit';
// import type { Actions } from './$types';
//
// const validateEmail = (email: string) => {
// 	return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
// }
//
// export const actions = {
// 	default: async ({ request }) => {
// 		const data = await request.formData();
//
// 		const name = data.get("name")
// 		const email = data.get("email")
// 		const password = data.get("password")
//
//
// 		// 2.
// 		if (!name || !email || !password) {
// 			return fail(400, { name, email, password, missing: true });
// 		}
// 		// 3.
// 		if (typeof name != "string" || typeof userEmail != "string") {
// 			return fail(400, { incorrect: true })
// 		}
// 		// 4.
// 		if (!validateEmail(userEmail)) {
// 			return fail(400, { name, incorrect: true });
// 		}
//
// 		// 5.
// 		await prisma.user.create({
// 			data: {
// 				name,
// 				email: userEmail,
// 			},
// 		});
//
// 		throw redirect(303, `/drafts`)
// 	}
// } satisfies Actions;