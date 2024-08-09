import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
  app.component(
    "none-layout",
    defineAsyncComponent(() => import("@/layouts/none"))
  );

  app.component(
    "meeting-layout",
    defineAsyncComponent(() => import("@/layouts/meeting"))
  );

  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/default"))
  );
}
