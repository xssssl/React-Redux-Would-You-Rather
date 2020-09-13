import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import MainImg from '../assets/main.png'

const Login: React.FC = (props: any) => {
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-sm-4 offset-sm-4">
          <div className="card">
            <img src={MainImg} className="card-img-top" alt="would you rather question"></img>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="LoginUsername">Username</label>
                  <select id="LoginUsername" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                  <small className="form-text text-muted">
                    This is a mock authentication UI just for demonstration. Choose one of the users from the dropdown.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="LoginPassword">Password</label>
                  <input type="password" className="form-control" id="LoginPassword" placeholder="password" />
                  <small className="form-text text-muted">
                    Feel free to enter anything. It is fine. Or you could leave it empty.
                  </small>
                </div>
                <div className="form-group mt-5">
                  <button type="submit" className="btn btn-primary btn-block">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
