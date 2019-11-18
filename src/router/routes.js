import Index from "@/pages/Index/index.vue"
import Foo from "@/pages/Foo/index.vue"
import Bar from "@/pages/Bar/index.vue"



const routes = [
  {path: '/', component: Index},
  {path: '/foo', component: Foo},
  {path: '/bar', component: Bar},
]

export default routes