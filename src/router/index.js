//definire regole di routing
import {createRouter, createWebHistory} from "vue-router";
import NotFound from "../views/404View.vue"
import QuizesView from "../views/QuizesView.vue";
import QuizView from "../views/QuizView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
          path: "/",
            name: QuizesView,
            component: QuizesView
        },
        {
            path: "/:catchall(.*)*",
            component : NotFound
        },
        {
            path: "/quiz/:id",
            component: QuizView
        }
    ]
})

export default router