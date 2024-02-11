import { useState } from "react"
import GenderCheckbox from "./GenderCheckbox"
import useSignup from "../../hooks/useSignup"
import { Link } from "react-router-dom"


function Signup() {

  const {signup,loading}=useSignup()
 const [userinfo,setuserinfo]= useState({
    name:'',
    username:'',
    password:'',
    conformpassword:'',
    gander:''
  })
const handleCheckboxchange=(gander)=>{
  setuserinfo({...userinfo,gander})
}
  const handlesubmit=(event)=>{
    event.preventDefault();
    signup(userinfo)
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
		<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-blue-500'> ChatApp</span>
		</h1>

			<form onSubmit={handlesubmit}>
					<div>
						<label className='label p-2'>
					<span className='text-base label-text'>Full Name</span>
		</label>
						<input value={userinfo.name} onChange={(e)=>{ setuserinfo({...userinfo,name:e.target.value})}} type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
		</div>

				<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' value={userinfo.username} onChange={(e)=>{
              setuserinfo({...userinfo,username:e.target.value})
            }} placeholder='johndoe' className='w-full input input-bordered h-10' />
				</div>

					<div>
						<label className='label'>
					<span className='text-base label-text'>Password</span>
				</label>
						<input
					type='password'
          value={userinfo.password}
          onChange={(e)=>{
            setuserinfo({...userinfo,password:e.target.value})
          }}
							placeholder='Enter Password'
					className='w-full input input-bordered h-10'
						/>
					</div>

				<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
				</label>
				<input
							type='password'
              value={userinfo.conformpassword}
          onChange={(e)=>{
            setuserinfo({...userinfo,conformpassword:e.target.value})
          }}
							placeholder='Confirm Password'
						className='w-full input input-bordered h-10'
					/>
					</div>

				<GenderCheckbox  onCheckBoxChange={handleCheckboxchange} selectedGender={userinfo.gander}/>

					<Link className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' to={'/login'} >
					to	Already have an account?
			</Link>

					<div>
					<button disabled={loading} className='btn btn-block btn-sm mt-2 border border-slate-700'>
  {loading ? <span className="loading loading-spinner" ></span> : 'Sign Up'}
</button>

			</div>
				</form>
		</div>
</div>

  )
}

export default Signup