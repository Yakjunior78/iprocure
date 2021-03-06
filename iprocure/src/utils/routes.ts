export const routesArray = [
	{
		path: "/login",
		name: "login",
		component: () => import("../pages/auth/login.vue"),
		meta: {
			show: false,
			auth: false,
			permissions: [],
			authScopes: ["isGuest"],
			svg:
				'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">\n' +
				'  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />\n' +
				"</svg>",
		},
	},
	{
		path: "/register",
		name: "register",
		component: () => import("../pages/auth/register.vue"),
		meta: {
			show: false,
			auth: false,
			permissions: [],
			authScopes: ["isGuest"],
			svg:
				'<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">\n' +
				'  <path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />\n' +
				"</svg>",
		},
	},
	{
		path: "/",
		name: "home",
		component: () => import("../pages/profile/index.vue"),
		meta: {
			show: true,
			auth: false,
			permissions: [],
			authScopes: ["isPermitted"],
			svg:
				"<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\">\n" +
				"  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\" />\n" +
				"</svg>",
		},
	},
	{
		path: "/profile",
		name: "profile",
		component: () => import("../pages/profile/index.vue"),
		meta: {
			show: true,
			auth: true,
			permissions: [],
			authScopes: ["isPermitted"],
			svg:
				"<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\">\n" +
				"  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z\" />\n" +
				"</svg>",
		},
	},
	
	{
		path: "/countries",
		name: "countries",
		component: () => import("../pages/countries/index.vue"),
		meta: {
			show: true,
			auth: true,
			permissions: [],
			authScopes: ["isPermitted"],
			svg:
				"<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\">\n" +
				"  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 6h16M4 10h16M4 14h16M4 18h16\" />\n" +
				"</svg>",
		},
	},
	
	{
		path: "/countries/:id",
		name: "countryView",
		component: () => import("../pages/countries/show.vue"),
		meta: {
			show: false,
			auth: true,
			permissions: [],
			authScopes: ["isPermitted"],
			svg:
				"<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\">\n" +
				"  <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M4 6h16M4 10h16M4 14h16M4 18h16\" />\n" +
				"</svg>",
		},
	}
];
