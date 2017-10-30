const HomePage = resolve => require(['@/page/HomePage'], resolve)
const BuyPage = resolve => require(['@/page/BuyPage'], resolve)
const MvPage = resolve => require(['@/page/MvPage'], resolve)
const AboutPage = resolve => require(['@/page/AboutPage'], resolve)
const InfoPage = resolve => require(['@/page/InfoPage'], resolve)
const LoginPage = resolve => require(['@/page/LoginPage'], resolve)
const Register = resolve => require(['@/page/Register'], resolve)
import Home from '@/Home.vue'
const routes = [
                    {
                         path: '', 
                         redirect: '/home'
                    },
                    {   
                        path: '/', 
                        component: Home,
                        children: [
                            {   
                                path: 'home', 
                                component: HomePage
                            },
                            {   
                                path: 'info',
                                component: InfoPage
                            }, 
                            {   
                                path: 'mv',
                                component: MvPage
                            },
                            {   
                                path: 'buy',
                                component: BuyPage
                            },
                            {   
                                path: 'about',
                                component: AboutPage
                            },
                            {   
                                path: 'login',
                                component: LoginPage
                            },
                            {   
                                path: 'regs',
                                component: Register
                            },
                        ]
                    }
                ]
export default routes
