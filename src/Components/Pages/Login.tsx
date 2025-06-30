import NavigationBar from '@/Components/NavigationBar/NavigationBar';
import Layout from '@/Components/Layout/Layout';
import LoginForm from '@/Components/Login/LoginForm';

const Login = () => {
    return(
        <Layout>
            <NavigationBar />
            <LoginForm />
        </Layout>   
    )
}
export default Login;