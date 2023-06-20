import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contribute from "./pages/Contribute";
import Assignment from "./pages/Assignment";
import CourseContent from "./pages/CourseContent";
import Dashboard from "./pages/Dashboard";
import MidFinal from "./pages/MidFinal";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NavBar from './components/NavBar';
import { useAuthContext } from './hooks/useAuthContext';

function App() {

	const { user } = useAuthContext()

	return (
		<div className="App">

			<NavBar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/about' element={<About />} />
				<Route path='/users/login' element={!user ? <Login /> : <Navigate to='/' />} />
				<Route path='/users/signUp' element={!user ? <SignUp /> : <Navigate to='/' />} />
				<Route path='/xlzjoorD6C' element={user ? user.dashboardAccess ? <Dashboard /> : <Navigate to='/' /> : <Navigate to='/users/login' />} />
				<Route path='/contribute' element={user ? <Contribute /> : <Navigate to='/users/login' />} />
				<Route path='/courses/:id/courseContent' element={<CourseContent />} />
				<Route path='/courses/:id/courseContent/assignments' element={<Assignment />} />
				<Route path='/courses/:id/courseContent/quizzes' element={<Quiz />} />
				<Route path='/courses/:id/courseContent/midFinals' element={<MidFinal />} />
			</Routes>

		</div>
	)
}

export default App;
