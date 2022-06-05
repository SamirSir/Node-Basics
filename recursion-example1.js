/**
 * @description
 * make a recursive function that replaces the subroutes key by children
 * but internal properties remains same
 */

const routes = [
    {
        path: "/",
        component: " Dashboard",
        exact: true,
        name: "Dashboard",
    },
    {
        path: "/newsletter",
        component: "NewsletterSubsList",
        exact: true,
        name: "NewsletterList",
    },
    {
        path: "/banner",
        component: "BannerList",
        exact: true,
        name: "BannerList",
        subRoutes: [
            {
                path: "/banner/add",
                component: "AddBanner",
                exact: true,
                name: "AddBanner",
                subRoutes: [
                    {
                        path: "/banner/add",
                        component: "AddBanner",
                        exact: true,
                        name: "AddBanner",
                        subRoutes: [
                            {
                                path: "/banner/add",
                                component: "AddBanner",
                                exact: true,
                                name: "AddBanner",
                            },
                            {
                                path: "/banner/edit/:id",
                                component: "EditBanner",
                                exact: true,
                                name: "EditBanner",
                            },
                        ],
                    },
                    {
                        path: "/banner/edit/:id",
                        component: "EditBanner",
                        exact: true,
                        name: "EditBanner",
                    },
                ],
            },
            {
                path: "/banner/edit/:id",
                component: "EditBanner",
                exact: true,
                name: "EditBanner",
            },
        ],
    },
];

const route = {
    path: "/",
    component: " Dashboard",
    exact: true,
    name: "Dashboard",
};

function replaceSubRouteByChildren(routes) {
    routes.forEach((route) => {
        if (route.subRoutes) {
            replaceSubRouteByChildren(route.subRoutes);
            route.children = route.subRoutes;
            delete route.subRoutes;
        }
    });
    return routes;
}

console.log({ newRoutes: replaceSubRouteByChildren(routes) });
