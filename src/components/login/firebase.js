import { initializeApp } from "firebase/app"
import "firebase/auth"

const app = initializeApp({
// TODO please fill your details
apiKey: "AIzaSyDn_BHLdrWSmGoWi1WRD4ykTYO-bYyXUqw",
authDomain: "yamini-portfolio-a6849.firebaseapp.com",
projectId: "yamini-portfolio-a6849",
storageBucket: "yamini-portfolio-a6849.appspot.com",
messagingSenderId: "684720382731",
appId: "1:684720382731:web:6eef8e6910862b521c780e",
measurementId: "G-0CF5KP8SWF"
})
export const auth = app.auth()
export default app;