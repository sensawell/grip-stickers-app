const routes = [
  {
    path: "/",
    component: () => import("@/layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/pages/IndexPage.vue"),
      },
      {
        path: "form",
        name: "form",
        component: () => import("@/pages/FormPage.vue"),
      },
      {
        path: "result",
        name: "result",
        component: () => import("@/pages/ResultPage.vue"),
      },
      {
        path: "instructions",
        name: "instructions",
        component: () => import("@/pages/InstructionsPage.vue"),
      },
      {
        path: "safety",
        name: "safety",
        component: () => import("@/pages/SafetyPage.vue"),
      },
      {
        path: "legal",
        name: "legal",
        component: () => import("@/pages/LegalNotePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("@/pages/ErrorNotFound.vue"),
  },
];

export default routes;
